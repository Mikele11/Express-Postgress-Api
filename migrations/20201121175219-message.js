'use strict';
module.exports = {
	up: (queryInterface, DataTypes) =>
		queryInterface.createTable('Messages', {
			Id: {
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			body: DataTypes.STRING,
			user_id: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Customers',
					key: 'id',
					as: 'user_id',
				}
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE
			},
		}),
	down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Messages'),
};