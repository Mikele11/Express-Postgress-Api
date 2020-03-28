const Message = require('../models').Message;

const getPosts = (req, res) => {
	return Message
		.findAll({})
		.then(posts => res.status(200).send(posts))
		.catch(error => res.status(400).send(error));
};

const getPostById = (req, res) => {
	return Message
		.findOne({ where: { id: req.params.id } })
		.then(post => {
			if (!post) {
				return res.status(404).send({
					message: 'post Not Found',
				});
			}
			return res.status(200).send(post);
		})
		.catch(error => res.status(400).send(error));
};

const createPost = (req, res) => {
	return Message
		.create({
			user_id: req.body.user_id,
			body: req.body.body
		})
		.then(post => res.status(201).send(post))
		.catch(error => res.status(400).send(error));
};

const updatePost = (req, res) => {
	return Message
		.findOne({ where: { id: req.params.id } })
		.then(post => {
			if (!post) {
				return res.status(404).send({
					message: 'post Not Found',
				});
			}
			return post
				.update({
					user_id: req.body.user_id || post.user_id,
					body: req.body.body || post.body
				})
				.then(() => res.status(200).send(post))  // Send back the updated todo.
				.catch((error) => res.status(400).send(error));
		})
		.catch((error) => res.status(400).send(error));
};

const deletePost = async(req, res) => {

	await Message.destroy({ where: { id: req.params.id } });
	res.status(200).send({
		success: true
	}); 	
};

module.exports = {
	getPosts,
	getPostById,
	createPost,
	updatePost,
	deletePost,
};