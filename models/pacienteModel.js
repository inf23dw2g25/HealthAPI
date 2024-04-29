const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Paciente = db.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero_de_utente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contacto: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Paciente;
