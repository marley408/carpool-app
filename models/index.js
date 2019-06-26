"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

const sequelize = new Sequelize('carpools_dev', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

const Car = require("./Car");
const Carpool = require("./Carpool");

const models = {
  Car: Car.init(sequelize, Sequelize),
  Carpool: Carpool.init(sequelize, Sequelize),
};

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize,
  Sequelize
};

module.exports = db;