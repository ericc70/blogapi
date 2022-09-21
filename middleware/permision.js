const Tag = require('../model/tag')
const User = require('../model/user')
//   canView = (user, project) => {
//     return (
//       user.role === ROLE.ADMIN ||
//       project.userId === user.id
//     )
//   }

// editableBy()

// onlyCreator = ()=>{}

// onlyAdmin = ()=>{}

module.exports = onlyAdminOrCraetorArticle =  (obj) => {


    try {
      
      return async (req, res, next) => {

        const creatBy = await obj.findById(req.params.id, "createdBy").lean()
           .then(data =>
         
             data.createdBy.valueOf()
             
           )
           .catch((e) =>  { console.log('Error undefined database')})
          //  console.log(req.params) 
          //  console.log("cre " + creatBy)
     
         if(!creatBy){
               res.status(500).json( "Article non trouvé 2")
             }
         if (req.auth.userRole == 'admin') {
               next()
             }
         else if (creatBy == req.auth.userId) {
               next()
             }
        else {
          res.status(403).json( "Acces inderdit")
        }
       
      }

    } catch (error) {
// console.log("ee")
      throw 'Invalid article ';
    }




  }

  module.exports = authorize = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.auth.userRole)) {
        // return next(
        //   //new ErrorResponse("Vous n'avez pas l'autorisation d'acceder à cette ressource", 403)
        // ); 
        console.log('error 001')
        throw 'Invalid user role';

      }
      next();
    };
  };


  module.exports = canInteractUser = () =>{

 
    try {
      
      return async (req, res, next) => {

        const userCourant = await User.findById(req.params.id, "_id").lean()
           .then(data =>
         
             data._id.valueOf()
             
           )
           .catch((e) =>  { console.log('Error undefined database')})
           console.log(req.params) 
           console.log("cre " + userCourant)
     
         if(!userCourant){
               res.status(500).json( "utilisateur non trouvé 22")
             }
         if (req.auth.userRole == 'admin') {
               next()
             }
         else if (userCourant == req.auth.userId) {
        
               next()
             }
        else {
          res.status(403).json( "Acces inderdit not user")
        }
       
      }

    } catch (error) {
// console.log("ee")
      throw 'Invalid article ';
    }



  }