# Flights Notification Service

## Overview
The Flights Notification Service is responsible for handling flight-related notifications by interacting with RabbitMQ to send real-time ticketing information to users. This service ensures effective communication by processing messages from a notification queue and sending emails to the relevant recipients.

## Features
- **Real-Time Notifications:** Sends flight booking notifications and updates via email.
- **RabbitMQ Integration:** Utilizes RabbitMQ for asynchronous message processing.
- **Asynchronous Processing:** Ensures efficient and timely notification handling.

## High Level Design 
![High Level Design](https://github.com/logeshsuresh/Flights-Notification-Service/blob/master/Flights-HLD.png)


## Setup
Follow these steps to set up the project locally:

#### 1. Clone the Repository

```
git clone https://github.com/logeshsuresh/Flights-Notification-Service.git
```

#### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```
cd Flights-Notification-Service
npm install
```

#### 4. Create .env File

In the root directory, create a .env file and add the required environment variables:
```
PORT=3002
GMAIL_EMAIL='admin@gmail.com'
GMAIL_PASS='admin@123'
```

#### 4. Initialize Sequelize

Navigate to src/config and create a config.json file with the following content:
```
{
  "development": {
    "username": "root",
    "password": "null",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
Replace username, password, and database with your actual database credentials.

#### 5. Run the following command to apply database migrations:

```
npx sequelize db:migrate
```
Migrations help manage changes to the database schema over time.

## Folder Structure
The src folder contains all the source code for the project:

- `config/`: Contains configurations for libraries and modules.
- `controllers/`: Handles incoming requests, passes data to the business layer, and structures the API responses.
- `middlewares/`: Intercepts requests for tasks such as validation and authentication.
- `migrations/`: Contains migration files that track changes to the database schema.
- `models/`: Defines the database schema and represents tables in the database.
- `repositories/`: Contains logic for interacting with the database, including queries and ORM operations.
- `routes/`: Registers routes and their corresponding middleware and controllers.
- `seeders/`: Stores seed classes for populating the database with initial data.
- `services/`: Contains business logic and interacts with repositories to handle database operations.
- `utils/`: Provides helper methods and utility functions.

## Usage
To start the Notification Service, use:

```
npm start
```
Ensure that all necessary environment variables and configurations are set before starting the service.

