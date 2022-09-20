const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/permision');
const tagCtrl = require('../controller/tag')

const Tag = require('../model/tag')


router.get('/', tagCtrl.getAllTag)
router.get('/:id', tagCtrl.getOneTag)
router.post('/',auth, authorize("admin"), tagCtrl.CreateTag)
router.put('/:id',auth, authorize("admin","user"), onlyAdminOrCraetorArticle(Tag), tagCtrl.updateTag)
router.delete('/:id',auth, authorize("admin"), tagCtrl.deleteTag)

module.exports = router;