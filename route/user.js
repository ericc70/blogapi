
const express = require('express');
const router = express.Router();

const userCtrl = require('../controller/user')

router.post('/', userCtrl.createUser)


module.exports = router;