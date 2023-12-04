const {DataTypes} = require('sequelize')
const db = require('../db/conn')
//nome modelo                         sequilize ja cria os campos de id                            
const User = db.define('User', {
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        require: true
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false,
        require: true
      },
      cpf:{
        type:DataTypes.STRING,
        allowNull:false,
        require: true
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false,
        require: true
      }
})

module.exports = User;