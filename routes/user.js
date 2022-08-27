const express = require('express');
const users = require('../controllers/users');

const router = express.Router();

router
    .get('/', users.getUsers)
    .post('/', users.createUsers)
    .get('/:id', users.getUser)
    .delete('/:id', users.deleteUser)

module.exports = router;