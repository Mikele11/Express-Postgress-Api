const express = require('express');
const router = express.Router();

const Message = require('../controllers/message');

router.get('/', Message.getPosts);
router.get('/:id', Message.getPostById);
router.post('/', Message.createPost);
router.put('/:id', Message.updatePost);
router.delete('/:id', Message.deletePost);

module.exports = router;
