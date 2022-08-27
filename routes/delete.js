const express = require('express');
const deleteController = require('../controllers/delete');

const router = express.Router();

router 
    .delete('/room/:roomId', deleteController.deleteByRoom)
    .delete('/message/:messageId', deleteController.deleteByMessage)

module.exports = router;