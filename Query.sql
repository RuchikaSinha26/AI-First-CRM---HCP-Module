CREATE DATABASE IF NOT EXISTS ai_first_crm;

USE ai_first_crm;

CREATE TABLE IF NOT EXISTS interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,

    hcp_name VARCHAR(255),
    hospital VARCHAR(255),
    interaction_date VARCHAR(50),
    interaction_type VARCHAR(100),

    products_discussed TEXT,
    meeting_summary TEXT,
    follow_up TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);