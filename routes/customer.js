const express = require('express');
const router = express.Router();

const Customer = require('../controllers/customer');

router.get('/', Customer.getUsers);
router.get('/:id', Customer.getUserById);
router.post('/', Customer.createUser);
router.put('/:id', Customer.updateUser);
router.delete('/:id', Customer.deleteUser);

module.exports = router;
