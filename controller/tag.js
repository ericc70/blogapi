const Tag = require('../model/tag')

exports.CreateTag = async (req, res) => {

    try {
        const tagObj = JSON.parse(req.body.tag)
        delete tagObj._id;

        const tag = new Tag({
            ...tagObj
        });
        await tag.save()
            .then(() => res.status(201).json({
                message: 'Objet enregistré !'
            }))

    } catch (error) {
        res.status(400).json({
            error
        })
    }

}

exports.getAllTag = async (req, res) => {
    try {
        await Tag.find().then(
            (tags) => {
                res.status(200).json(tags);
            }
        )
    } catch (error) {
        res.status(400).json({
            error: error
        });
    }

}

exports.getOneTag = async (req, res) => {

    try {
        await Tag.findOne({
            _id: req.params.id
        }).then(
            (tag) => {
                res.status(200).json(tag);
            }
        )
    } catch (error) {
        res.status(404).json({
            error: error
        });
    }

}
exports.updateTag = async (req, res) => {

    const tagObj = JSON.parse(req.body.tag)

    try {
        await Tag.updateOne({
            _id: req.params.id
        } {
            ...thingObject,
            _id: req.params.id
        })
            .then(() => res.status(201).json({
                message: 'Objet enregistré !'
            }))
    } catch (error) {
        res.status(400).json({
            error
        })
    }


}




exports.deleteTag = async (req, res) => {

    try {
        await Tag.deleteOne({
            _id: req.params.id
        })
            .then(() => res.status(200).json({
                message: 'Objet supprimé !'
            }))
    } catch (error) {
        res.status(500).json({
            error
        })
    }





}