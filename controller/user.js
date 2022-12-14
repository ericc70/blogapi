const User = require('../model/user')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports.signup =  (req, res) => {

    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
        firstName:req.body.firstName ,
        lastName: req.body.lastName,
        displayName: req.body.displayName,
        rgpd: req.body.rgpd,  
        ipAt: req.body.ipAt
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}

exports.login =  (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }
                res.status(200).json({
                    userId: user._id,
                    userRole: user.role,
                    token: jwt.sign(
                        { userId: user._id, userRole: user.role },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                }) 
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

module.exports.logout =  (req, res) => {
    //
}

module.exports.getOneUser = async(req, res, next)=>{

    try {
        await User.findOne({ _id: req.auth.userId }, { password: 0})
        .then(
            (user) => {
                res.status(200).json(user);
            }
        )
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}
module.exports.getAllUser = async(req, res, next)=>{
    try {
        await User.find({},  { password: 0}).then(
            (users) => {
                res.status(200).json(users);
            }
        )
    } catch (error) {
        res.status(400).json({
            error: error
        });
    }


}
module.exports.updateUser = async(req, res, next)=>{
    try {
        await User.findByIdAndUpdate(
           req.params.id,
           {
       
            email: req.body.email,
            firstName:req.body.firstName ,
            lastName: req.body.lastName,
            displayName: req.body.displayName,
            rgpd: req.body.rgpd,  
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
module.exports.deleteUser = async(req, res, next)=>{

    try {
        await User.deleteOne({
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
module.exports.chgStatus = async(req, res, next)=>{}
module.exports.chgRoles = async(req, res, next)=>{}
module.exports.chgPasswd = async(req, res, next)=>{}
// module.exports.chgRoles = async(req, res, next)=>{}
