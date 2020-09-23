CREATE DATABASE apitoti;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    done BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (name, done) VALUES
    ('Comprar Cenoura' , true),
    ('Comprar Alface' , false);