const connection = require("../db/db");

function getAll() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Paciente", (err, results) => {
            if (err) {
                console.error('Erro ao listar Pacientes:', err);
                reject(err);
            }
            console.log('Pacientes:', results);
            resolve(results);
        });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Paciente WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erro ao obter Paciente por ID:', err);
                reject(err);
            }
            if (results.length === 0) {
                reject(new Error('Paciente não encontrado'));
            }
            console.log('Paciente:', results[0]);
            resolve(results[0]);
        });
    });
}

function create(numero_de_utente, nome, contacto) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO Paciente (numero_de_utente, nome, contacto) VALUES (?, ?, ?)", 
        [numero_de_utente, nome, contacto], 
        (err, results) => {
            if (err) {
                console.error('Erro ao criar um novo Paciente:', err);
                reject(err);
            }
            console.log('Paciente criado com sucesso:', results);
            resolve(results.insertId);
        });
    });
}

function update(id, numero_de_utente, nome, contacto) {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE Paciente SET numero_de_utente = COALESCE(?, numero_de_utente), nome = COALESCE(?, nome), contacto = COALESCE(?, contacto) WHERE id = ?",
            [numero_de_utente, nome, contacto, id],
            (err, results) => {
                if (err) {
                    console.error('Erro ao atualizar Paciente:', err);
                    reject(err);
                }
                console.log('Paciente atualizado com sucesso:', results);
                resolve(results);
            }
        );
    });
}

function _delete(id) {
    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) {
                reject(err);
                return;
            }

            connection.query(
                'DELETE FROM Consulta WHERE paciente_id = ?',
                [id],
                (err, consultDeleteResult) => {
                    if (err) {
                        connection.rollback(() => {
                            console.error('Erro ao apagar as consultas do Paciente:', err);
                            reject(err);
                        });
                        return;
                    }
                    connection.query(
                        'DELETE FROM Historico WHERE id_paciente = ?',
                        [id],
                        (err, historicoDeleteResult) => {
                            if (err) {
                                connection.rollback(() => {
                                    console.error('Erro ao apagar o Historico do Paciente:', err);
                                    reject(err);
                                });
                                return;
                            }
                            connection.query(
                                'DELETE FROM Paciente WHERE id = ?',
                                [id],
                                (err, specialistDeleteResult) => {
                                    if (err) {
                                        connection.rollback(() => {
                                            console.error('Erro ao apagar o Paciente:', err);
                                            reject(err);
                                        });
                                        return;
                                    }

                                    connection.commit((err) => {
                                        if (err) {
                                            connection.rollback(() => {
                                                console.error('Erro ao confirmar a transação:', err);
                                                reject(err);
                                            });
                                            return;
                                        }
                                        console.log('Paciente e suas consultas apagadas com sucesso.');
                                        resolve({ consultDeleteResult, specialistDeleteResult, historicoDeleteResult });
                                    });
                                }
                            );
                        }     
                    );                
                }
            );
        });
    });
}


function getConsultasByPacienteId(paciente_id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Consulta WHERE paciente_id = ?', [paciente_id], (err, results) => {
            if (err) {
                console.error('Erro ao obter as consultas por Paciente ID:', err);
                reject(err);
            }
            console.log('Consultas encontradas:', results);
            resolve(results);
        });
    });
}

function getHistoricoByPacienteId(paciente_id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Historico WHERE id_paciente = ?', [paciente_id], (err, results) => {
            if (err) {
                console.error('Erro ao obter as Historico por Paciente ID:', err);
                reject(err);
            }
            console.log('Historico encontrado:', results);
            resolve(results);
        });
    });
}

module.exports = { getAll, getById, create, update, _delete, getConsultasByPacienteId , getHistoricoByPacienteId };