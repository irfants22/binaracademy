"use strict";

const crypto = require("crypto");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      type: DataTypes.ENUM("small", "medium", "large"),
      rentPerDay: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      availableAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );

  Car.beforeCreate((car) => (car.id = crypto.randomUUID()));
  return Car;
};
