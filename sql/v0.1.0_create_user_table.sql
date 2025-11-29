-- Tabela User (Usuário)
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    neighborhood VARCHAR(100), -- Importante para o filtro por bairro citado no projeto
    password VARCHAR(255) NOT NULL,
    user_type ENUM('client', 'provider', 'admin') NOT NULL -- Define se é cliente ou prestador
);
