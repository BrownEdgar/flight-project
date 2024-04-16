const express = require('express');
const router = express.Router();

const authenticateToken = require('../Middlewares/authenticateToken');
const UsersControllers = require('../Controllers/UsersController');
const Controllers = new UsersControllers()

router.get('/', authenticateToken, Controllers.getAllUsers);

module.exports = router;
