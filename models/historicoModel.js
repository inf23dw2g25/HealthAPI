// HistoricoModel.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

/**
 * @typedef Historico
 * @property {integer} id.required - O ID do histórico
 * @property {string} historico - Descrição do histórico
 * @property {string} alergias - Alergias do paciente
 * @property {string} medicacao - Medicação do paciente
 * @property {integer} id_paciente.required - ID do paciente associado ao histórico
 */

const Historico = db.define('Historico', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  historico: {
    type: DataTypes.STRING
  },
  alergias: {
    type: DataTypes.STRING
  },
  medicacao: {
    type: DataTypes.STRING
  },
  id_paciente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Paciente',
      key: 'id'
    }
  }
});

module.exports = Historico;
