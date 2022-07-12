CREATE DATABASE empresa;

CREATE TABLE IF NOT EXISTS empregados(

    id serial,
    nome VARCHAR(50) NOT NULL,
    sexo VARCHAR(7) NOT NULL,
    departamneto VARCHAR(50) NOT NULL,
    sobre text,
    PRIMARY KEY(id)
);