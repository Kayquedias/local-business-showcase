-- Tabela ContactRequest (Solicitação de Contato)
CREATE TABLE ContactRequest (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id_client INT NOT NULL, -- O cliente interessado
    service_id INT NOT NULL,
    contact_date DATE DEFAULT (CURRENT_DATE),
    message TEXT,
    FOREIGN KEY (user_id_client) REFERENCES User(user_id),
    FOREIGN KEY (service_id) REFERENCES Service(service_id) ON DELETE CASCADE
);
