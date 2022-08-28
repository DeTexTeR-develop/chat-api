const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

const SECRET_KEY = 'bfxloEiHa26WfstY16YgqjmPNaY9ly31';

module.exports.decode = async(req, res, next) => {
   if (!req.headers['authorization']) {
    return res.status(400).json({ success: false, message: 'No access token provided' });
  };
  const accessToken = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.userId = decoded.userId;
    req.userType = decoded.type;
    return next();
  } 
  catch (error){
    return res.status(401).json({ success: false, message: error.message });
  };
};

module.exports.encode = async(req, res, next) => {
    try{
        const { userId } = req.params;
        const user = await UserModel.findById(userId);  
        const payload = {
            userId: user._id,
            userType: user.type,
        };
        const authToken = jwt.sign(payload, SECRET_KEY);
        console.log('Auth', authToken);
        req.authToken = authToken;
        next();
   }
   catch(error){
    return res.status(400).json({success: false, message: error.error});
   };
};