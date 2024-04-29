// EspecialistaModel.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Especialista = db.define('Especialista', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidade_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Especialidade',
      key: 'id'
    }
  }
});

module.exports = Especialista;
