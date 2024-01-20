const express = require('express');
const amqplib = require('amqplib');

const { ServerConfig } = require('./config');
const { EmailService } = require('./services');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

async function connectQueueAndSendMail() {
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue('noti-queue');
        await channel.consume('noti-queue', (data) => {
            console.log(`${Buffer.from(data.content)}`);
            const { recipientEmail, subject, text } = JSON.parse(Buffer.from(data.content));
            console.log(recipientEmail);
            console.log(subject);
            console.log(text);
            EmailService.sendEmail(ServerConfig.GMAIL_EMAIL, recipientEmail, subject, text);
            channel.ack(data);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await connectQueueAndSendMail();
    console.log('queue is up !');
});
