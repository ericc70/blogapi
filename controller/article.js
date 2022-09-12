const Articles = require('../model/article')


module.exports.createArticle = async (req, res) => {
console.log(req.params)
    const articleObj = new Articles ({
       category: [req.body.category],
       tag: [ req.body.tag],
       title: req.body.title,
       slug: req.body.slug,
       body: req.body.body,
       viewsCount: req.body.viewsCount,
       createdBy : req.body.userid

    })
    
    delete articleObj._id

    console.log(articleObj)
    try {
        await articleObj.save()

    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}