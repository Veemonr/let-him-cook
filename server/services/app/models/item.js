'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Ingredient, {foreignKey: "itemId"})
      Item.belongsTo(models.User, {foreignKey: "authorId"})
      Item.belongsTo(models.Category, {foreignKey: "categoryId"})
    }
  }
  Item.init({
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
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notNull: {
          msg: "Description Is Required"
        },
        notEmpty: {
          msg: "Description Is Required"
        }
      }
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull: false, 
      validate: {
        notNull: {
          msg: "Price Is Required"
        },
        notEmpty: {
          msg: "Price Is Required"
        },
        min: {
          args: [1000],
          msg: "Price Must Be At Least 1000"
        }
      }
    },
    imgUrl: { 
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notNull: {
          msg: "Image Url Is Required"
        },
        notEmpty: {
          msg: "Image Url Is Required"
        }
      }
    },
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};