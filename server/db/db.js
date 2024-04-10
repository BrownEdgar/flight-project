const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.SERVER_DB_URL,
  "root",
  process.env.SERVER_DB_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: false
  })

async function start() {
  try {
    await sequelize.authenticate()
    console.log("db connect success")
  } catch (error) {
    console.log("db connect error")
  }
}

start()

const Cities = require('../models/cities.model')(sequelize)
const Companies = require('../models/company.model')(sequelize)
const Reyses = require('../models/reyses.model')(sequelize)

module.exports = {
  sequelize,
  Cities,
  Companies,
  Reyses,
}