const consultaService = require('../services/consultaService');

const consultaController = {
  // Listar todas as consultas
  async list(req, res) {
    try {
      const consultas = await consultaService.listConsultas();
      res.json(consultas);
    } catch (error) {
      console.error('Erro ao listar as consultas:', error);
      res.status(500).json({ error: 'Erro ao listar as consultas' });
    }
  },

  // Obter uma consulta por ID
  async getById(req, res) {
    const { id } = req.params;
    try {
      const consulta = await consultaService.getConsultaById(id);
      res.json(consulta);
    } catch (error) {
      console.error('Erro ao obter a consulta por ID:', error);
      res.status(500).json({ error: 'Erro ao obter a consulta por ID' });
    }
  },

  // Criar uma nova consulta
  async create(req, res) {
    const { data_e_hora, paciente_id, especialista_id, observacoes } = req.body;
    try {
      const newConsultaId = await consultaService.createConsulta(data_e_hora, paciente_id, especialista_id, observacoes);
      res.status(201).json({ id: newConsultaId, message: 'Consulta criada com sucesso' });
    } catch (error) {
      console.error('Erro ao criar uma nova consulta:', error);
      res.status(500).json({ error: 'Erro ao criar uma nova consulta' });
    }
  },

  // Atualizar uma consulta existente
  async update(req, res) {
    const { id } = req.params;
    const { data_e_hora, paciente_id, especialista_id, observacoes } = req.body;
    try {
      await consultaService.updateConsulta(id, data_e_hora, paciente_id, especialista_id, observacoes);
      res.json({ message: 'Consulta atualizada com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar a consulta:', error);
      res.status(500).json({ error: 'Erro ao atualizar a consulta' });
    }
  },

  // Excluir uma consulta existente
  async delete(req, res) {
    const { id } = req.params;
    try {
      await consultaService.deleteConsulta(id);
      res.json({ message: 'Consulta excluída com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir a consulta:', error);
      res.status(500).json({ error: 'Erro ao excluir a consulta' });
    }
  }
};

module.exports = consultaController;
