const connection = require('../db/db');




function listConsultas() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Consulta', (err, results) => {
            if (err) {
                console.error('Erro ao listar as consultas:', err);
                reject(err);
            }
            console.log('Consultas encontradas:', results);
            resolve(results);
        });
    });
}

function getConsultaById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Consulta WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erro ao obter a consulta por ID:', err);
                reject(err);
            }
            if (results.length === 0) {
                reject(new Error('Consulta não encontrada'));
            }
            console.log('Consulta encontrada:', results[0]);
            resolve(results[0]);
        });
    });
}


function createConsulta(data_e_hora, paciente_id, especialista_id, observacoes) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO Consulta (data_e_hora, paciente_id, especialista_id, observacoes) VALUES (?, ?, ?, ?)',
            [data_e_hora, paciente_id, especialista_id, observacoes],
            (err, results) => {
                if (err) {
                    console.error('Erro ao criar uma nova consulta:', err);
                    reject(err);
                }
                console.log('Consulta criada com sucesso:', results);
                resolve(results.insertId);
            });
    });
}

// Função para atualizar uma consulta existente
function updateConsulta(id, data_e_hora, paciente_id, especialista_id, observacoes) {
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE Consulta SET data_e_hora = COALESCE(?, data_e_hora), paciente_id = COALESCE(?, paciente_id), especialista_id = COALESCE(?, especialista_id), observacoes = COALESCE(?, observacoes) WHERE id = ?',
            [data_e_hora, paciente_id, especialista_id, observacoes, id],
            (err, results) => {
                if (err) {
                    console.error('Erro ao atualizar a consulta:', err);
                    reject(err);
                }
                console.log('Consulta atualizada com sucesso:', results);
                resolve(results);
            }
        );
    });
}


function deleteConsulta(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM Consulta WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erro ao excluir a consulta:', err);
                reject(err);
            }
            console.log('Consulta excluída com sucesso:', results);
            resolve(results);
        });
    });
}

module.exports = { listConsultas, getConsultaById, createConsulta, updateConsulta, deleteConsulta };
