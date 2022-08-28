const express =  require('express');

const {encode} =  require('../middleware/jwt');

const router = express.Router();

router
    .post('/login/:userId' , encode,  (req, res, next) => {
        return res.status(200).json({sucess: true, authorization: req.authToken});
    });
 
module.exports = router;
