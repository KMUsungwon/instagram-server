'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.article, {foreignKey: 'user_id'});
    }
  };
  user.init({
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    userName: DataTypes.STRING,
    profileImg: DataTypes.STRING,
    nickName: DataTypes.STRING,
    description: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    backgroundImage: DataTypes.STRING,
    themaColor: DataTypes.STRING,
    selectedCategory:{
      type : DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue('value'));
      },
      set: function (value) {
        this.setDataValue('value', JSON.stringify(value));
      },

    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};