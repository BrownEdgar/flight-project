const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
 return sequelize.define('cities',{
    name:{
      type:DataTypes.STRING(50),
      allowNul:false,
      unique:true
    },
    code:{
      type:DataTypes.STRING(50),
      allowNul:false,
      unique:true
    }
  },{
    timestamps:false,
    tableName: 'cities'
  });
} 
