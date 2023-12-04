const {DataTypes} = require('sequelize')

const db = require('../db/conn')
const User = require('./User')

const Address = db.define('Address', {
  Qidosos: {
    type: DataTypes.STRING,
    allowNull:false,
    require:true
  },
  city: {
    type: DataTypes.STRING,
    allowNull:false,
    require:true
  },
  states: {
    type: DataTypes.STRING,
    allowNull:false,
    require:true
  },
  times: {
    type: DataTypes.STRING,
    allowNull:false,
    require:true
  },
  description: {
    type: DataTypes.STRING,
    allowNull:false,
    require:true
  }
})

//1 - N
Address.belongsTo(User)
User.hasMany(Address)


module.exports = Address;