module.exports = (sequelize, DataTypes) => {
  const ExerciseLog = sequelize.define("ExerciseLog", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exercise_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return ExerciseLog;
};
