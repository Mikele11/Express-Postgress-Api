const express = require('express');
const router = express.Router();

const User = require('../controllers/user');

router.get('/', User.getUsers)
router.get('/:id', User.getUserById)
router.post('/', User.createUser)
router.put('/:id', User.updateUser)
router.delete('/:id', User.deleteUser)

module.exports = router;
