const makeValidation = require('@withvoid/make-validation');
const userModal = require('../models/User');
const { options } = require('../routes');

const USER_TYPES = {
    CONSUMER: "consumer",
    SUPPORT: "support",
};

module.exports.getUsers = async(req, res) => {

};

module.exports.createUsers = async(req, res) => {
    try{
        console.log(USER_TYPES);
        const validation = makeValidation(types => ({
            payload: req.body,
            checks: {
              firstName: { type: types.string },
              lastName: { type: types.string },
              type: { type: types.enum, options: { enum: USER_TYPES } },
            }
          }));
          if (!validation.success) return res.status(400).json(validation);
        
        const {firstName, lastName, type} = req.body;
        const user = new userModal({
            firstName,
            lastName,
            type
        });
        res.status(200).json({success: true, user});
    }
    catch(err){
        return res.status(500).json({success: false, error: err})
    }

};

module.exports.getUser = async(req, res) => {

};

module.exports.deleteUser = async(req, res) => {

};