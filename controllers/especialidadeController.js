const especialidadeService = require('../services/especialidadeService');

const especialidadeController = {
    async getAll (req, res, next) {
        try {
            const especialidade = await especialidadeService.getAll();
            res.json(especialidade);
        } catch (error) {
            console.error('Erro a obter todas as  especialidades', error);
            next(error);
        }
    },

    async getById (req, res, next) {
        try {
            const especialidade = await especialidadeService.getById(req.params.id);
            res.json(especialidade);
        } catch (error) {
            console.error('Erro ao obter especialidade por ID:', error);
            next(error);
        }
    },

    async create (req, res, next) {
        const { nome } = req.body;
        try {
            const novaEspecialidade = await especialidadeService.create(nome);
            res.json({ id: novaEspecialidade, message: 'Especialidade criada com sucesso'});
        } catch (error) {
            console.error('Erro ao criar nova Especialidade:', error);
            next(error);
        }
    },

    async update (req, res, next) {
        const {id} = req.params;
        const { nome} = req.body;
        try {
            await especialidadeService.update(id, nome);
            res.json({ message: 'Especialidade atualizado com sucesso'});
        } catch (error) {
            console.error('Erro ao atualizar Especialidade:', error);
            next(error);
        }
    },

    async _delete (req, res, next) {
        const {id} = req.params;
        try {
            await especialidadeService._delete(id);
            res.json({ message: 'Especialidade apagado com sucesso'});
        } catch (error) {
            console.error('Erro ao apagar Especialidade:', error);
            next(error);
        }
    },

    async getEspecialistasByEspecialidade (req, res, next) {
        const especialidadeId = req.params.id;
        try {
            const especialistas = await especialidadeService.getEspecialistasByEspecialidade(especialidadeId);
            res.json(especialistas);
    }   catch (error) {
            console.error('Erro ao obter consultas por especialista:', error);
            next(error);
        }
    }

};

module.exports = especialidadeController;
