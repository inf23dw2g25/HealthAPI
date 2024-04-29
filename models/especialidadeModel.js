const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Especialidade = db.define('Especialidade', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Especialidade;
