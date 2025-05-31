-- Verifica e cria a tabela de usuários se não existir
CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('admin', 'barbeiro', 'cliente') NOT NULL,
    status BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Verifica e cria a tabela de clientes se não existir
CREATE TABLE IF NOT EXISTS clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    telefone VARCHAR(20),
    cpf VARCHAR(14) UNIQUE,
    data_nascimento DATE,
    pontos INT DEFAULT 0,
    nivel VARCHAR(20) DEFAULT 'Bronze',
    ultima_visita DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Insere alguns dados de teste se as tabelas estiverem vazias
INSERT INTO usuarios (nome, email, senha, tipo, status)
SELECT 'Admin', 'admin@barbearia.com', 'senha123', 'admin', true
WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE email = 'admin@barbearia.com');

INSERT INTO usuarios (nome, email, senha, tipo, status)
SELECT 'Cliente Teste', 'cliente@teste.com', 'senha123', 'cliente', true
WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE email = 'cliente@teste.com');

INSERT INTO clientes (usuario_id, telefone, cpf, data_nascimento, pontos, nivel)
SELECT 
    (SELECT id FROM usuarios WHERE email = 'cliente@teste.com'),
    '(11) 99999-9999',
    '123.456.789-00',
    '1990-01-01',
    100,
    'Prata'
WHERE NOT EXISTS (SELECT 1 FROM clientes WHERE cpf = '123.456.789-00');
