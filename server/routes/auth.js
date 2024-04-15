const express = require('express');
const router = express.Router();

const AuthControllers = require('../Controllers/AuthController');
const controllers = new AuthControllers()

router.post('/sign-up', controllers.signUp);
router.post('/sign-in', controllers.signIn);


module.exports = router;