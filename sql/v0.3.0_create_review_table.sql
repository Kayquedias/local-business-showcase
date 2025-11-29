-- Tabela Review (Avaliação)
CREATE TABLE Review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, -- O usuário que fez a avaliação
    service_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5), -- Garante nota entre 1 e 5
    comment TEXT,
    review_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (service_id) REFERENCES Service(service_id) ON DELETE CASCADE
);
