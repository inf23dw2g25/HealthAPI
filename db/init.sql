DROP DATABASE IF EXISTS healthapi

CREATE DATABASE healthapi

use healthapi

CREATE TABLE Paciente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero_de_utente INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    contacto VARCHAR(20) UNIQUE NOT NULL
);
CREATE TABLE Historico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    historico VARCHAR(255),
    alergias VARCHAR(255),
    medicacao VARCHAR(255),
    id_paciente INT NOT NULL,
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id)
);
CREATE TABLE Especialidade(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255)
);
CREATE TABLE Especialista (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    id_especialidade INT NOT NULL,
    FOREIGN KEY (id_especialidade) REFERENCES Especialidade(id)
);
CREATE TABLE Consulta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_e_hora DATETIME,
    paciente_id INT  NOT NULL,
    especialista_id INT  NOT NULL,
    observacoes VARCHAR(255),
    FOREIGN KEY (paciente_id) REFERENCES Paciente(id),
    FOREIGN KEY (especialista_id) REFERENCES Especialista(id)
);

-- Inserção de 30 registros fictícios na tabela Paciente
INSERT INTO Paciente (numero_de_utente, nome, contacto)
VALUES
    (12345, 'Maria Silva', 'maria@example.com'),
    (67890, 'João Santos', 'joao@example.com'),
    (54321, 'Ana Pereira', 'ana@example.com'),
    (98765, 'Pedro Alves', 'pedro@example.com'),
    (13579, 'Sofia Carvalho', 'sofia@example.com'),
    (24680, 'Carlos Rodrigues', 'carlos@example.com'),
    (86420, 'Mariana Costa', 'mariana@example.com'),
    (97531, 'Rafael Fernandes', 'rafael@example.com'),
    (11111, 'Lúcia Oliveira', 'lucia@example.com'),
    (22222, 'Gustavo Nunes', 'gustavo@example.com'),
    (33333, 'Isabel Santos', 'isabel@example.com'),
    (44444, 'André Almeida', 'andre@example.com'),
    (55555, 'Catarina Pereira', 'catarina@example.com'),
    (66666, 'Eduardo Silva', 'eduardo@example.com'),
    (77777, 'Fernanda Costa', 'fernanda@example.com'),
    (88888, 'Hugo Rodrigues', 'hugo@example.com'),
    (99999, 'Inês Sousa', 'ines@example.com'),
    (10101, 'José Pereira', 'jose@example.com'),
    (20202, 'Laura Alves', 'laura@example.com'),
    (30303, 'Miguel Fernandes', 'miguel@example.com'),
    (40404, 'Natália Santos', 'natalia@example.com'),
    (50505, 'Paulo Oliveira', 'paulo@example.com'),
    (60606, 'Rita Costa', 'rita@example.com'),
    (70707, 'Tiago Nunes', 'tiago@example.com'),
    (80808, 'Vitória Almeida', 'vitoria@example.com'),
    (90909, 'Xavier Silva', 'xavier@example.com'),
    (12121, 'Yara Rodrigues', 'yara@example.com'),
    (23232, 'Zé Maria', 'ze@example.com');

INSERT INTO Historico (historico, alergias, medicacao, id_paciente)
VALUES
    ('Histórico do paciente Maria Silva', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 1),
    ('Histórico do paciente João Santos', 'Alergia a amendoins', 'Aspirina diária', 2),
    ('Histórico do paciente Ana Pereira', 'Alergia a penicilina', 'Nenhuma medicação', 3),
    ('Histórico do paciente Pedro Alves', 'Nenhuma alergia conhecida', 'Insulina', 4),
    ('Histórico do paciente Sofia Carvalho', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 5),
    ('Histórico do paciente Carlos Rodrigues', 'Alergia a camarão', 'Nenhuma medicação', 6),
    ('Histórico do paciente Mariana Costa', 'Alergia a poeira', 'Anti-histamínicos', 7),
    ('Histórico do paciente Rafael Fernandes', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 8),
    ('Histórico do paciente Lúcia Oliveira', 'Alergia a pólen', 'Nenhuma medicação', 9),
    ('Histórico do paciente Gustavo Nunes', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 10),
    ('Histórico do paciente Isabel Santos', 'Alergia a gatos', 'Nenhuma medicação', 11),
    ('Histórico do paciente André Almeida', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 12),
    ('Histórico do paciente Catarina Pereira', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 13),
    ('Histórico do paciente Eduardo Silva', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 14),
    ('Histórico do paciente Fernanda Costa', 'Alergia a mofo', 'Nenhuma medicação', 15),
    ('Histórico do paciente Hugo Rodrigues', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 16),
    ('Histórico do paciente Inês Sousa', 'Alergia a ácaros', 'Nenhuma medicação', 17),
    ('Histórico do paciente José Pereira', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 18),
    ('Histórico do paciente Laura Alves', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 19),
    ('Histórico do paciente Miguel Fernandes', 'Alergia a frutos secos', 'Epinefrina', 20),
    ('Histórico do paciente Natália Santos', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 21),
    ('Histórico do paciente Paulo Oliveira', 'Alergia a grama', 'Anti-histamínicos', 22),
    ('Histórico do paciente Rita Costa', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 23),
    ('Histórico do paciente Tiago Nunes', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 24),
    ('Histórico do paciente Vitória Almeida', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 25),
    ('Histórico do paciente Xavier Silva', 'Alergia a pólen', 'Nenhuma medicação', 26),
    ('Histórico do paciente Yara Rodrigues', 'Nenhuma alergia conhecida', 'Nenhuma medicação', 27),
    ('Histórico do paciente Zé Maria', 'Alergia a animais', 'Nenhuma medicação', 28);

-- Inserção de registros na tabela Especialidade
INSERT INTO Especialidade (nome) VALUES
    ('Clínica Geral'),
    ('Pediatria'),
    ('Dermatologia'),
    ('Ginecologia'),
    ('Ortopedia'),
    ('Cardiologia'),
    ('Neurologia'),
    ('Oftalmologia'),
    ('Psiquiatria'),
    ('Oncologia'),
    ('Endocrinologia'),
    ('Otorrinolaringologia'),
    ('Urologia'),
    ('Gastroenterologia'),
    ('Nefrologia'),
    ('Radiologia'),
    ('Anestesiologia'),
    ('Pneumologia'),
    ('Hematologia'),
    ('Reumatologia');

-- Inserção de registros na tabela Especialista
INSERT INTO Especialista (nome, id_especialidade) VALUES
    ('Dr. Ana Silva', 1),        -- Clínica Geral
    ('Dr. João Santos', 2),      -- Pediatria
    ('Dr. Pedro Alves', 3),      -- Dermatologia
    ('Dra. Maria Sousa', 4),     -- Ginecologia
    ('Dr. Manuel Rodrigues', 5), -- Ortopedia
    ('Dra. Sofia Carvalho', 6),  -- Cardiologia
    ('Dr. Carlos Pereira', 7),   -- Neurologia
    ('Dra. Catarina Nunes', 8),  -- Oftalmologia
    ('Dr. Miguel Fernandes', 9), -- Psiquiatria
    ('Dra. Inês Oliveira', 10),  -- Oncologia
    ('Dr. Rui Costa', 11),       -- Endocrinologia
    ('Dra. Ana Almeida', 12),    -- Otorrinolaringologia
    ('Dr. Tiago Xavier', 13),    -- Urologia
    ('Dra. Laura Alves', 14),    -- Gastroenterologia
    ('Dr. André Pereira', 15),   -- Nefrologia
    ('Dra. Joana Santos', 16),   -- Radiologia
    ('Dr. António Rodrigues', 17),-- Anestesiologia
    ('Dra. Paula Fernandes', 18),-- Pneumologia
    ('Dr. Francisco Costa', 19), -- Hematologia
    ('Dra. Isabel Almeida', 20), -- Reumatologia
    ('Dr. José Oliveira', 2),     -- Pediatria
    ('Dra. Mariana Costa', 4),   -- Ginecologia
    ('Dr. Rafael Fernandes', 7), -- Neurologia
    ('Dra. Vitória Alves', 8),   -- Oftalmologia
    ('Dr. Hugo Silva', 10),      -- Oncologia
    ('Dra. Rita Pereira', 12),   -- Otorrinolaringologia
    ('Dr. Xavier Carvalho', 14), -- Gastroenterologia
    ('Dra. Yara Nunes', 16),     -- Radiologia
    ('Dr. Zé Maria', 18),         -- Pneumologia
    ('Dra. Natália Costa', 20);  -- Reumatologia

-- Inserção de registros na tabela Consulta
INSERT INTO Consulta (data_e_hora, paciente_id, especialista_id, observacoes) VALUES
    ('2023-01-10 09:00:00', 1, 1, 'Consulta de rotina'),
    ('2023-02-15 14:30:00', 2, 2, 'Exame de rotina'),
    ('2023-03-20 10:45:00', 3, 3, 'Consulta dermatológica'),
    ('2023-04-25 11:15:00', 4, 4, 'Consulta ginecológica'),
    ('2023-05-30 08:30:00', 5, 5, 'Consulta ortopédica'),
    ('2023-06-05 13:00:00', 6, 6, 'Consulta cardiológica'),
    ('2023-07-10 15:45:00', 7, 7, 'Consulta neurológica'),
    ('2023-08-15 16:30:00', 8, 8, 'Consulta oftalmológica'),
    ('2023-09-20 10:00:00', 9, 9, 'Consulta psiquiátrica'),
    ('2023-10-25 14:45:00', 10, 10, 'Consulta oncológica'),
    ('2023-11-30 09:30:00', 11, 11, 'Consulta endocrinológica'),
    ('2023-12-05 11:45:00', 12, 12, 'Consulta otorrinolaringológica'),
    ('2024-01-10 09:00:00', 13, 13, 'Consulta urológica'),
    ('2024-02-15 14:30:00', 14, 14, 'Consulta gastroenterológica'),
    ('2024-03-20 10:45:00', 15, 15, 'Consulta nefrológica'),
    ('2024-04-25 11:15:00', 16, 16, 'Consulta radiológica'),
    ('2024-05-30 08:30:00', 17, 17, 'Consulta anestesiológica'),
    ('2024-06-05 13:00:00', 18, 18, 'Consulta pneumológica'),
    ('2024-07-10 15:45:00', 19, 19, 'Consulta hematológica'),
    ('2024-08-15 16:30:00', 20, 20, 'Consulta reumatológica'),
    ('2024-09-20 10:00:00', 1, 1, 'Consulta de rotina'),
    ('2024-10-25 14:45:00', 2, 2, 'Exame de rotina'),
    ('2024-11-30 09:30:00', 3, 3, 'Consulta dermatológica'),
    ('2024-12-05 11:45:00', 4, 4, 'Consulta ginecológica'),
    ('2025-01-10 09:00:00', 5, 5, 'Consulta ortopédica'),
    ('2025-02-15 14:30:00', 6, 6, 'Consulta cardiológica'),
    ('2025-03-20 10:45:00', 7, 7, 'Consulta neurológica'),
    ('2025-04-25 11:15:00', 8, 8, 'Consulta oftalmológica'),
    ('2025-05-30 08:30:00', 9, 9, 'Consulta psiquiátrica'),
    ('2025-06-05 13:00:00', 10, 10, 'Consulta oncológica'),
    ('2025-07-10 15:45:00', 11, 11, 'Consulta endocrinológica'),
    ('2025-08-15 16:30:00', 12, 12, 'Consulta otorrinolaringológica'),
    ('2025-09-20 10:00:00', 13, 13, 'Consulta urológica'),
    ('2025-10-25 14:45:00', 14, 14, 'Consulta gastroenterológica'),
    ('2025-11-30 09:30:00', 15, 15, 'Consulta nefrológica'),
    ('2025-12-05 11:45:00', 16, 16, 'Consulta radiológica'),
    ('2026-01-10 09:00:00', 17, 17, 'Consulta anestesiológica'),
    ('2026-02-15 14:30:00', 18, 18, 'Consulta pneumológica'),
    ('2026-03-20 10:45:00', 19, 19, 'Consulta hematológica'),
    ('2026-04-25 11:15:00', 20, 20, 'Consulta reumatológica'),
    ('2026-05-30 08:30:00', 1, 1, 'Consulta de rotina'),
    ('2026-06-05 13:00:00', 2, 2, 'Exame de rotina'),
    ('2026-07-10 15:45:00', 3, 3, 'Consulta dermatológica'),
    ('2026-08-15 16:30:00', 4, 4, 'Consulta ginecológica'),
    ('2026-09-20 10:00:00', 5, 5, 'Consulta ortopédica'),
    ('2026-10-25 14:45:00', 6, 6, 'Consulta cardiológica'),
    ('2026-11-30 09:30:00', 7, 7, 'Consulta neurológica'),
    ('2026-12-05 11:45:00', 8, 8, 'Consulta oftalmológica'),
    ('2027-01-10 09:00:00', 9, 9, 'Consulta psiquiátrica'),
    ('2027-02-15 14:30:00', 10, 10, 'Consulta oncológica'),
    ('2027-03-20 10:45:00', 11, 11, 'Consulta endocrinológica'),
    ('2027-04-25 11:15:00', 12, 12, 'Consulta otorrinolaringológica'),
    ('2027-05-30 08:30:00', 13, 13, 'Consulta urológica'),
    ('2027-06-05 13:00:00', 14, 14, 'Consulta gastroenterológica'),
    ('2027-07-10 15:45:00', 15, 15, 'Consulta nefrológica'),
    ('2027-08-15 16:30:00', 16, 16, 'Consulta radiológica'),
    ('2027-09-20 10:00:00', 17, 17, 'Consulta anestesiológica'),
    ('2027-10-25 14:45:00', 18, 18, 'Consulta pneumológica'),
    ('2027-11-30 09:30:00', 19, 19, 'Consulta hematológica'),
    ('2027-12-05 11:45:00', 20, 20, 'Consulta reumatológica');

