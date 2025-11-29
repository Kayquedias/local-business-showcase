-- 3. Tabela Service (Serviço)
CREATE TABLE Service (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2), -- Usado Decimal ao invés de Float para precisão monetária
    publish_date DATE DEFAULT (CURRENT_DATE),
    availability VARCHAR(255), -- Ex: "Seg-Sex 08h as 18h"
    status ENUM('active', 'inactive', 'paused') DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);
