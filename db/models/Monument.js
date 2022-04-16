const MonumentModel = (sequelize, DataTypes) => {
  const Monument = sequelize.define('Monument', {
    name: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
  });
  return Monument;
};

module.exports = MonumentModel;
