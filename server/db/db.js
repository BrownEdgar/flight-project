const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  process.env.SERVER_DB_URL,
  "root",
  process.env.SERVER_DB_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306, 
    logging: false,
  }
);

async function start() {
  try {
    await sequelize.authenticate()
    console.log("db connected successfully");
  } catch (error) {
    console.log("Unable yo connect to the database", error);
  }
}

start();

const cities = require("../Models/Cities.model")(sequelize);
const companies = require("../Models/Company.model")(sequelize);
const flight = require("../Models/Flight.model")(sequelize);
const users = require("../Models/Users.model")(sequelize);

module.exports = {
  sequelize,
  cities,
  companies,
  flight,
  users,
};
