const express =  require('express');
const users =  require('../controllers/users');
const {encode} =  require('../middleware/jwt');

const router = express.Router();

router
    .post('/login/:userId', (req, res, next) => {
        res.send('hello!')
    });

module.exports = router;
