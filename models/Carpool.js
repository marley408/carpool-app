
const Sequelize =  require("sequelize");

class Carpool extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        destination: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      {
        modelName: "carpool",
        sequelize
      }
    );
  }

  static associate(models) {
    this.cars = models.Carpool.hasMany(models.Car);
  }
}


module.exports = Carpool;