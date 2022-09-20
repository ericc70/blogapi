
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/permision');
const userCtrl = require('../controller/user')

// router.post('/', userCtrl.createUser)

router.post('/signup', userCtrl.signup)
router.post('/login' , userCtrl.login)
router.get('/logout' , userCtrl.logout)
router.get('/' ,auth, userCtrl.getOneUser)
router.get('/list' ,auth, authorize("admin"), userCtrl.getAllUser)

module.exports = router;