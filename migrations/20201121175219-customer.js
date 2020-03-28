'use strict';
module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('Customers', {
			id: {
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			firstName: Sequelize.STRING,
			lastName: Sequelize.STRING,
			phone: Sequelize.STRING,
			password: Sequelize.STRING,
			email: Sequelize.STRING,
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
		}),
	down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Customers'),
};