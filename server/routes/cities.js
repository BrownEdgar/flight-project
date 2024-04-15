const express = require('express');
const router = express.Router();

const CityController = require('../Controllers/CityController');
const controller =new CityController()

router.get("/",controller.getAllCities);

router.post("/",controller.saveCity);


module.exports = router;


