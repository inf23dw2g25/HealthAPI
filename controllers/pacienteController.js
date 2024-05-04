const pacienteService = require('../services/pacienteService');

const pacienteController = {
    async getAll (req, res, next) {
        try {
            const pacientes = await pacienteService.getAll();
            res.json(pacientes);
        } catch (error) {
            console.error('Erro a obter todos os paciente', error);
            next(error);
        }
    },

    async getById (req, res, next) {
        try {
            const paciente = await pacienteService.getById(req.params.id);
            res.json(paciente);
        } catch (error) {
            console.error('Erro ao obter paciente por ID:', error);
            next(error);
        }
    },

    async create (req, res, next) {
        const { numero_de_utente ,nome ,contacto } = req.body;
        try {
            const novoEspecialista = await pacienteService.create(numero_de_utente ,nome ,contacto);
            res.json({ id: novoEspecialista, message: 'Paciente criado com sucesso'});
        } catch (error) {
            console.error('Erro ao criar paciente:', error);
            next(error);
        }
    },

    async update (req, res, next) {
        const {id} = req.params;
        const { numero_de_utente ,nome ,contacto } = req.body;
        try {
            await pacienteService.update(id, numero_de_utente ,nome ,contacto);
            res.json({ message: 'Paciente atualizado com sucesso'});
        } catch (error) {
            console.error('Erro ao atualizar paciente:', error);
            next(error);
        }
    },

    async _delete (req, res, next) {
        const {id} = req.params;
        try {
            await pacienteService._delete(id);
            res.json({ message: 'Paciente apagado com sucesso'});
        } catch (error) {
            console.error('Erro ao apagar paciente:', error);
            next(error);
        }
    },

    async getConsultasByPaciente (req, res, next) {
        const pacienteId = req.params.id;
        try {
            const consultas = await pacienteService.getConsultasByPacienteId(pacienteId);
            res.json(consultas);
    }   catch (error) {
            console.error('Erro ao obter consultas por paciente:', error);
            next(error);
        }
    },

    async getHistoricoByPaciente (req, res, next) {
        const pacienteId = req.params.id;
        try {
            const historicos = await pacienteService.getHistoricoByPacienteId(pacienteId);
            res.json(historicos);
    }   catch (error) {
            console.error('Erro ao obter historico do paciente:', error);
            next(error);
        }
    }

};

module.exports = pacienteController;
