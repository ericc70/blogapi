const Articles = require('../model/article')


module.exports.createArticle = async (req, res) => {

    const articleObj = new Articles({
        category: req.body.category,
        tag: req.body.tag,
        title: req.body.title,
        slug: req.body.slug,
        body: req.body.body,
        viewsCount: req.body.viewsCount,
        createdBy: req.body.userid

    })

    delete articleObj._id

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

module.exports.fetchAllArticles = async (req, res) => { }
module.exports.fetchOneArticle = async (req, res) => { }
module.exports.updateArticle = async (req, res) => {



    try {

        /* limit du nombre de champs editable si role user */
        if (req.auth.userRole == 'user') {
            ArticleBody = {
                title: "toto use ff r"
            }

        }

        if (req.auth.userRole == 'admin') {
            ArticleBody = {
                title: "toto admin"
            }
        }



        await Articles.findByIdAndUpdate(
            req.params.id, ArticleBody
        )
            .then(() => res.status(200).json({
                message: 'Objet modifié !'
            }))
    } catch (error) {

        res.status(500).json({
            error: error
        })
    }

}
module.exports.deleteArticle = async (req, res) => { }