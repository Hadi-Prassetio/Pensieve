'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      device.hasMany(models.location,{
        as:"locations",
        foreignKey:"idDevice"
      })
    }
  }
  device.init({
    deviceId: DataTypes.STRING,
    deviceType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'device',
  });
  return device;
};