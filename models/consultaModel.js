// ConsultaModel.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Consulta = db.define('Consulta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_e_hora: {
    type: DataTypes.DATE,
    allowNull: false
  },
  paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Paciente',
      key: 'id'
    }
  },
  especialista_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Especialista',
      key: 'id'
    }
  },
  observacoes: {
    type: DataTypes.STRING
  }
});

module.exports = Consulta;
