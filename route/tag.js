const express = require('express');
const router = express.Router();

const tagCtrl = require('../controller/tag')

router.get('/', tagCtrl.getAllTag)
router.get('/:id', tagCtrl.getOneTag)
router.post('/', tagCtrl.CreateTag)
router.put('/:id', tagCtrl.updateTag)
router.delete('/:id', tagCtrl.deleteTag)

module.exports = router;