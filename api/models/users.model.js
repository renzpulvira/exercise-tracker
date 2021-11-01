module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_created: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });

  return User;
};
