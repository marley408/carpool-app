
const Sequelize =  require("sequelize");

class Car extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        // attributes
        driver: {
          type: DataTypes.STRING,
          allowNull: false
        },
        pickupLocation: {
          type: DataTypes.STRING,
          allowNull: false,
          fieldName: 'pickup_location'
        },
        departure: {
          type: DataTypes.DATE,
          allowNull: false
        },
        seatsAvailable: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        modelName: "car",
        sequelize
      }
    );
  }
}


module.exports = Car;