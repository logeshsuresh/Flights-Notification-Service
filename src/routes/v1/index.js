const express = require('express');

const { InfoController, EmailController } = require('../../controllers');

const router = express.Router();

router.post('/tickets', EmailController.create);

router.get('/info', InfoController.info);

module.exports = router;