
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/permision');
const articlesCtrl = require('../controller/article');
const Article = require('../model/article');

router.post('/', articlesCtrl.createArticle) 
router.put('/:id', auth, authorize("admin", "user") ,  onlyAdminOrCraetorArticle(Article), articlesCtrl.updateArticle )


module.exports = router