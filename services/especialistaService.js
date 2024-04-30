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
        connection.query("SELECT * FROM Especialista WHERE id = ?", [id], (err, results) => {
            if (err) {
                console.error('Erro ao obter Especialista por ID:', err);
                reject(err);
            }
            if (results.length === 0) {
                console.log('Especialista não encontrado');
            }
            console.log('Especialista:', results[0]);
            resolve(results[0]);
        });
    });
}

function create(nome, especialidade) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO Especialista (nome, especialidade) VALUES (?, ?)", 
        [nome, especialidade], 
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

function update(id, nome, especialidade) {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE Especialista SET nome = ?, especialidade = ? WHERE id = ?", 
        [nome, especialidade, id], 
        (err, results) => {
            if (err) {
                console.error('Erro ao atualizar especialista:', err);
                reject(err);
            }
            console.log('Especialista atualizado com sucesso:', results);
            resolve(results);
        });
    });
}

function _delete(id) {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM Especialista WHERE id = ?", [id], (err, results) => {
            if (err) {
                console.error('Erro ao apagar o especialista:', err);
                reject(err);
            }
            console.log('Especialista apagado com sucesso:', results);
            resolve(results);
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