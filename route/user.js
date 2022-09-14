
const express = require('express');
const router = express.Router();

const userCtrl = require('../controller/user')

// router.post('/', userCtrl.createUser)

router.post('/signup', userCtrl.signup)
router.post('/login' , userCtrl.login)

module.exports = router;