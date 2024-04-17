const { DataTypes } = require('sequelize')

module.exports = function (sequelize) {
  return sequelize.define('flight', {
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
    status: {
      type: DataTypes.ENUM('delayed', 'on-time', 'arrived'),
      allowNull: false,
      unique: true
    },
    estimated_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    timestamps: false,
    tableName: 'flight'
  });
} 
