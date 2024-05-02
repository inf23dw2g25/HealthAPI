const connection = require("../db/db");

function getAll() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Especialidade", (err, results) => {
            if (err) {
                console.error('Erro ao listar Especialidade:', err);
                reject(err);
            }
            console.log('Especialidades:', results);
            resolve(results);
        });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Especialidade WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erro ao obter Especialidade por ID:', err);
                reject(err);
            }
            if (results.length === 0) {
                reject(new Error('Especialidade não encontrado'));
            }
            console.log('Especialidade:', results[0]);
            resolve(results[0]);
        });
    });
}

function create(nome) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO Especialidade (nome) VALUES (?)", 
        [nome], 
        (err, results) => {
            if (err) {
                console.error('Erro ao criar um novo Especialidade:', err);
                reject(err);
            }
            console.log('Especialidade criado com sucesso:', results);
            resolve(results.insertId);
        });
    });
}

function update(id, nome) {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE Especialidade SET nome = COALESCE(?, nome) WHERE id = ?",
            [nome, id],
            (err, results) => {
                if (err) {
                    console.error('Erro ao atualizar Especialidade:', err);
                    reject(err);
                }
                console.log('Especialidade atualizado com sucesso:', results);
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
                'DELETE FROM Especialista WHERE id_especialidade= ?',
                [id],
                (err, consultDeleteResult) => {
                    if (err) {
                        connection.rollback(() => {
                            console.error('Erro ao apagar as especialistas  da especialidade:', err);
                            reject(err);
                        });
                        return;
                    }

                    connection.query(
                        'DELETE FROM Especialidade WHERE id = ?',
                        [id],
                        (err, specialistDeleteResult) => {
                            if (err) {
                                connection.rollback(() => {
                                    console.error('Erro ao apagar a Especialidade:', err);
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
                                console.log('Especialidade e os seus  Especialistas apagada com sucesso.');
                                resolve({ consultDeleteResult, specialistDeleteResult });
                            });
                        }
                    );
                }
            );
        });
    });
}


function getEspecialistasByEspecialidade(id_especialidade) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Especialista WHERE id_especialidade = ?', [id_especialidade], (err, results) => {
            if (err) {
                console.error('Erro ao obter as Especialistas por especialidade ID:', err);
                reject(err);
            }
            console.log('Especialistas encontrados:', results);
            resolve(results);
        });
    });
}

module.exports = { getAll, getById, create, update, _delete, getEspecialistasByEspecialidade };