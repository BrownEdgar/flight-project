const { DataTypes } = require('sequelize')


module.exports = function (sequelize) {
  sequelize.define('reyses', {
    city_from: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    city_to: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    company: {
      type: DataTypes.INTEGER,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
  }, {
    timestamps: false,
    tableName: "reyses"
  })
}