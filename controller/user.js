const User = require('../model/user')

module.exports.createUser = async (req, res) => {
    console.log("hello")
 const tagObj = new User(req.body)
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