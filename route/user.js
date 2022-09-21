
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
router.put('/:id', auth, authorize('admin', 'user') ,canInteractUser(), userCtrl.updateUser)
router.delete('/:id', auth, authorize('admin', 'user') , canInteractUser(), userCtrl.deleteUser)

module.exports = router;