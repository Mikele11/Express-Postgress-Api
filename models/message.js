module.exports = (sequelize, DataTypes) => {
	const Message = sequelize.define('Message', {
		Id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		body: DataTypes.STRING,
		user_id: {
			type: DataTypes.INTEGER,
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
  
	Message.associate = models => {
		Message.belongsTo(models.Customer, { as: 'Posts', foreignKey: 'user_id' });
	};

	return Message;
};