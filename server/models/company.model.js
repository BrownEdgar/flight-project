const { DataTypes } = require('sequelize')


module.exports = function (sequelize) {
  sequelize.define('companies', {
    company_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    logo: {
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    tableName: "companies"
  })
}