'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/helpers');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      allowNull: false, 
      unique: {
        msg: "Email Must Be Unique"
      },
      validate: {
        notNull: {
          msg: "Email Is Required"
        },
        notEmpty: {
          msg: "Email Is Required"
        },
        isEmail: {
          msg: "Email Is Invalid"
        }
      }
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notNull: {
          msg: "Password Is Required"
        },
        notEmpty: {
          msg: "Password Is Required"
        },
        lengthCheck(value) {
          if(value.length < 5) throw new Error("Password Must Be At Least 5 Word")
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((User, option) => {
    return User.password = hashPassword(User.password)
  })
  return User;
};