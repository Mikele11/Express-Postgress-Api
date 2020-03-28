const Customer = require('../models').Customer;
const Message = require('../models').Message;

const getUsers = (req, res) => {
	return Customer
		.findAll({
			include: [				{
				model: Message,
				as: 'Posts',
			}]
		})
		.then(users => res.status(200).send(users))
		.catch(error => res.status(400).send(error));
};

const getUserById = (req, res) => {
	return Customer
		.findOne({ where: { id: req.params.id } })
		.then(user => {
			if (!user) {
				return res.status(404).send({
					message: 'User Not Found',
				});
			}
			return res.status(200).send(user);
		})
		.catch(error => res.status(400).send(error));
};

const createUser = (req, res) => {
	return Customer
		.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phone: req.body.phone,
			password: req.body.password,
			email: req.body.email,
		})
		.then(user => res.status(201).send(user))
		.catch(error => res.status(400).send(error));
};

const updateUser = (req, res) => {
	return Customer
		.findOne({ where: { id: req.params.id } })
		.then(user => {
			if (!user) {
				return res.status(404).send({
					message: 'User Not Found',
				});
			}
			return user
				.update({
					title: req.body.title || user.title,
					firstName: req.body.firstName || user.firstName,
					lastName: req.body.lastName || user.lastName,
					phone: req.body.phone || user.phone,
					password: req.body.password || user.password,
					email: req.body.email || user.email,
				})
				.then(() => res.status(200).send(user))  // Send back the updated todo.
				.catch((error) => res.status(400).send(error));
		})
		.catch((error) => res.status(400).send(error));
};

const deleteUser = async(req, res) => {
	const user = await Customer.destroy({ where: { id: req.params.id } });
	res.status(200).send({
		success: true,
		user: user
	});
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};