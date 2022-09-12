const Tag = require('../model/tag')

module.exports.CreateTag = async (req, res) => {
 const tagObj = new Tag(req.body)
    try {
       
        delete tagObj._id;

       
        await tagObj.save()
            .then(() => res.status(201).json({
                message: 'Objet enregistré !'
            }))
            // .catch(error => res.status(400).json({ error }))

    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

module.exports.getAllTag = async (req, res) => {

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

module.exports.getOneTag = async (req, res) => {

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

module.exports.updateTag = async (req, res) => {

  

    try {
         await Tag.findByIdAndUpdate(
            req.params.id,
            {
        
                name: req.body.name,
                description: req.body.description,
                picture: req.body.picture
            } 
       
          )
          .then(() => res.status(200).json({
            message: 'Objet modifié !'
        }))

          
    } catch (error) {
      
        res.status(400).json({
            error: error
        })
    }

}

module.exports.deleteTag = async (req, res) => {

    try {
        await Tag.deleteOne({
            _id: req.params.id
        })
            .then(() => res.status(200).json({
                message: 'Objet supprimé !'
            }))
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

}