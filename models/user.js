module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		phone: DataTypes.STRING,
		password: DataTypes.STRING,
		email: DataTypes.STRING,
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
	});

	return User;
};