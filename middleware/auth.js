const jwt = require('jsonwebtoken');
const User = require('../model/user')

module.exports = (req, res, next) => {

  try {

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const userRole = decodedToken.userRole;
    req.auth = { userId : userId, userRole : userRole }
// User.findById({userId})
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } 
    

    //if role session != role db

    // getoneUser
    // gerer le ban et if user(status == Banned)

    

    // compte valider if user(status == noActif)


    next();

  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }


// const { authorization } = req.headers;
// if (!authorization) {
//   return res.sendStatus(403);
// }
};