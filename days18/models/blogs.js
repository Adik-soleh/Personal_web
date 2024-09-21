'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blogs.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    checkBox1: DataTypes.STRING,
    checkBox2: DataTypes.STRING,
    checkBox3: DataTypes.STRING,
    checkBox4: DataTypes.STRING,
    sDate : DataTypes.STRING,
    eDate : DataTypes.STRING,
    duration : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blogs',
  });
  return blogs;
};