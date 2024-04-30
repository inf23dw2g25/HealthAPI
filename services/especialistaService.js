const connection = require("../db/db");

function getAll() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Especialista", (err, results) => {
            if (err) {
                console.error('Erro ao listar Especialistas:', err);
                reject(err);
            }
            console.log('Especialistas:', results);
            resolve(results);
        });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Especialista WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erro ao obter Especialista por ID:', err);
                reject(err);
            }
            if (results.length === 0) {
                reject(new Error('Especialista não encontrado'));
            }
            console.log('Especialista:', results[0]);
            resolve(results[0]);
        });
    });
}

function create(nome, id_especialidade) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO Especialista (nome, id_especialidade) VALUES (?, ?)", 
        [nome, id_especialidade], 
        (err, results) => {
            if (err) {
                console.error('Erro ao criar um novo especialista:', err);
                reject(err);
            }
            console.log('Especialista criado com sucesso:', results);
            resolve(results.insertId);
        });
    });
}

function update(id, nome, id_especialidade) {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE Especialista SET nome = COALESCE(?, nome), id_especialidade = COALESCE(?, id_especialidade) WHERE id = ?",
            [nome, id_especialidade, id],
            (err, results) => {
                if (err) {
                    console.error('Erro ao atualizar especialista:', err);
                    reject(err);
                }
                console.log('Especialista atualizado com sucesso:', results);
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
                'DELETE FROM Consulta WHERE especialista_id = ?',
                [id],
                (err, consultDeleteResult) => {
                    if (err) {
                        connection.rollback(() => {
                            console.error('Erro ao apagar as consultas do especialista:', err);
                            reject(err);
                        });
                        return;
                    }

                    connection.query(
                        'DELETE FROM Especialista WHERE id = ?',
                        [id],
                        (err, specialistDeleteResult) => {
                            if (err) {
                                connection.rollback(() => {
                                    console.error('Erro ao apagar o especialista:', err);
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
                                console.log('Especialista e suas consultas apagadas com sucesso.');
                                resolve({ consultDeleteResult, specialistDeleteResult });
                            });
                        }
                    );
                }
            );
        });
    });
}


function getConsultasByEspecialistaId(especialista_id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Consulta WHERE especialista_id = ?', [especialista_id], (err, results) => {
            if (err) {
                console.error('Erro ao obter as consultas por especialista ID:', err);
                reject(err);
            }
            console.log('Consultas encontradas:', results);
            resolve(results);
        });
    });
}

module.exports = { getAll, getById, create, update, _delete, getConsultasByEspecialistaId };