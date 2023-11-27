'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredient.init({
    itemId: DataTypes.INTEGER,
    name: { 
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notNull: {
          msg: "Name Is Required"
        },
        notEmpty: {
          msg: "Name Is Required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};