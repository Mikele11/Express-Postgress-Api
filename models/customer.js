module.exports = (sequelize, DataTypes) => {
	const Customer = sequelize.define('Customer', {
		Id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		phone: DataTypes.STRING,
		password: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			isEmail: true
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
	});

	Customer.associate = models => {
		Customer.hasMany(models.Message, { as: 'Posts', onDelete: 'cascade', hooks: true, foreignKey: 'user_id' });
	};

	return Customer;
};