
const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controller/article')

router.post('/', articlesCtrl.createArticle)


module.exports = router;