CREATE DATABASE Unboxing;

USE Unboxing;

CREATE TABLE recolectores(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    rol VARCHAR(20),
    usuario VARCHAR(20) NOT NULL,
    contraseña VARCHAR(40) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20),
    direccion VARCHAR(20) NOT NULL,
    telefono VARCHAR(20),
    correo VARCHAR(40) NOT NULL,
    terminos BOOLEAN DEFAULT TRUE,
    kilosRecolectados INT(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(correo),
    UNIQUE(id)
);

DESCRIBE recolectores;