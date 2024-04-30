const especialistaService = require('../service/especialistaService');

const especialistaController = {
async getAll (req, res, next) {
    try {
        const especialistas = await especialistaService.getAll();
        res.json(especialistas);
    } catch (error) {
        console.error('Erro a obter todos os especialistas', error);
        next(error);
    }
},

async getById (req, res, next) {
    try {
        const especialista = await especialistaService.getById(req.params.id);
        res.json(especialista);
    } catch (error) {
        console.error('Erro ao obter especialista por ID:', error);
        next(error);
    }
},

async create (req, res, next) {
    const { nome,id_especialidade } = req.body;
    try {
        const novoEspecialista = await especialistaService.create(nome,id_especialidade);
        res.json({ id: novoEspecialista, message: 'Especialista criado com sucesso'});
    } catch (error) {
        console.error('Erro ao criar especialista:', error);
        next(error);
    }
},

async update (req, res, next) {
    const {id} = req.params;
    const { nome,id_especialidade } = req.body;
    try {
        await especialistaService.update(id, nome,id_especialidade);
        res.json({ message: 'Especialista atualizado com sucesso'});
    } catch (error) {
        console.error('Erro ao atualizar especialista:', error);
        next(error);
    }
},

async _delete (req, res, next) {
    const {id} = req.params;
    try {
        await especialistaService._delete(id);
        res.json({ message: 'Especialista apagado com sucesso'});
    } catch (error) {
        console.error('Erro ao apagar especialista:', error);
        next(error);
    }
},

async getConsultasByEspecialista (req, res, next) {
    const especialistaId = req.params.id;
    try {
        await especialistaService.getConsultasByEspecialistaId(especialistaId);
        res.json(consultas);
}   catch (error) {
        console.error('Erro ao obter consultas por especialista:', error);
        next(error);
    }
}

};
