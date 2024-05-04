const connection = require("../db/db");

function getAll() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM Historico", (err, results) => {
            if (err) {
                console.error('Erro ao listar Historico:', err);
                reject(err);
            }
            console.log('Historicos:', results);
            resolve(results);
        });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Historico WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erro ao obter Especialidade por ID:', err);
                reject(err);
            }
            if (results.length === 0) {
                reject(new Error('Historico não encontrado'));
            }
            console.log('Historico:', results[0]);
            resolve(results[0]);
        });
    });
}

function create(historico, alergias, medicacao, id_paciente) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO Historico (historico, alergias, medicacao, id_paciente) VALUES (?,?,?,?)", 
        [nome], 
        (err, results) => {
            if (err) {
                console.error('Erro ao criar um novo Historico:', err);
                reject(err);
            }
            console.log('Historico criado com sucesso:', results);
            resolve(results.insertId);
        });
    });
}

function update(id, historico, alergias, medicacao, id_paciente) {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE Historico SET historico = COALESCE(?, historico), alergias = COALESCE(?, alergias), medicacao = COALESCE(?, medicacao), id_paciente = COALESCE(?, id_paciente)  WHERE id = ?",
            [historico, alergias, medicacao, id_paciente, id],
            (err, results) => {
                if (err) {
                    console.error('Erro ao atualizar Historico:', err);
                    reject(err);
                }
                console.log('Historico atualizado com sucesso:', results);
                resolve(results);
            }
        );
    });
}

function _delete(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM Historico WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erro ao excluir a historico:', err);
                reject(err);
            }
            console.log('Historico excluído com sucesso:', results);
            resolve(results);
        });
    });
}

module.exports = { getAll, getById, create, update, _delete };