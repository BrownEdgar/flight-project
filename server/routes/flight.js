const express = require('express');
const router = express.Router();

const FlightController = require('../Controllers/FlightController');
const getDocumentByField = require('../Middlewares/getDocumentByField');
const controller = new FlightController()

router.post('/', getDocumentByField, controller.saveFlight)

module.exports = router

