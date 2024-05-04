const historicoService = require('../services/historicoService');

const historicoController = {
    async getAll (req, res, next) {
        try {
            const historico = await historicoService.getAll();
            res.json(historico);
        } catch (error) {
            console.error('Erro a obter todos os  historicos', error);
            next(error);
        }
    },

    async getById (req, res, next) {
        try {
            const historico = await historicoService.getById(req.params.id);
            res.json(historico);
        } catch (error) {
            console.error('Erro ao obter historico por ID:', error);
            next(error);
        }
    },

    async create (req, res, next) {
        const { historico, alergias, medicacao, id_paciente } = req.body;
        try {
            const novaHistorico = await historicoService.create(historico, alergias, medicacao, id_paciente);
            res.json({ id: novaHistorico, message: 'Historico criado com sucesso'});
        } catch (error) {
            console.error('Erro ao criar nova Historico:', error);
            next(error);
        }
    },

    async update (req, res, next) {
        const {id} = req.params;
        const { historico, alergias, medicacao, id_paciente} = req.body;
        try {
            await historicoService.update(id, historico, alergias, medicacao, id_paciente);
            res.json({ message: 'Historico atualizado com sucesso'});
        } catch (error) {
            console.error('Erro ao atualizar Historico:', error);
            next(error);
        }
    },

    async _delete (req, res, next) {
        const {id} = req.params;
        try {
            await historicoService._delete(id);
            res.json({ message: 'Historico apagado com sucesso'});
        } catch (error) {
            console.error('Erro ao apagar Historico:', error);
            next(error);
        }
    },
};

module.exports = historicoController;
