const Articles = require('../model/article')


module.exports.createArticle = async (req, res) => {

    const articleObj = new Articles ({
       category: req.body.category,
       tag: req.body.tag,
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
        .then(() => res.status(201).json({
            message: 'Objet enregistré !'
        }))

    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}