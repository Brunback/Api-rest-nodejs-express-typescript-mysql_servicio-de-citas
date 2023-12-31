Trabajo Individual: Creación de API REST con Node.js, Express, typescript y Sequelize

En este proyecto, se ha desarrollado un API REST de forma individual, implementando tecnologías como Node.js, Express ,nodemon,typescript, Sequelize para la gestión de una base de datos MySQL local. Además, se ha utilizado Thunder Client para realizar consultas CRUD desde el lado del servidor.
Pasos realizados:

    Configuración de la base de datos local:
    Se ha configurado una base de datos MySQL local utilizando Sequelize, un ORM (Object-Relational Mapping) que facilita la interacción con la base de datos.

    Creación del servidor con Express:
    Se ha creado un servidor utilizando el framework Express de Node.js. Express es una herramienta poderosa para la construcción de aplicaciones web y APIs REST de manera sencilla y eficiente y type script para el control de tipos y la programación orientada a objetos para mejorar la calidad y la mantenibilidad del código.

    Implementación de consultas CRUD:
    Utilizando Express y Sequelize, se han implementado las consultas CRUD (Create, Read, Update y Delete) necesarias para interactuar con la base de datos. Esto permite realizar operaciones de creación, lectura, actualización y eliminación de datos desde el servidor.

    Uso de Thunder Client para consultas HTTP:
    Se ha utilizado Thunder Client, una extensión de Visual Studio Code, para realizar consultas HTTP directamente desde el lado del servidor. Esto facilita el proceso de pruebas y depuración de la API REST.

    Frontend en desarrollo:
    Aunque aún no se ha conectado el frontend, se ha preparado una carpeta de templates para futuras integraciones. Una vez conectado, el frontend podrá interactuar con la API para mostrar y manipular los datos almacenados en la base de datos.

tablas en myswql 

create database Consultas;
use Consultas;
CREATE TABLE person (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  cedula INT NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  edad INT NOT NULL,
  email VARCHAR(100) NOT NULL
  INDEX idx_cedula(cedula)
);
CREATE TABLE doctores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  especialidad VARCHAR(50) NOT NULL,
  consultorio VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
  INDEX idx_especialidad(especialidad)
);

CREATE TABLE citas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_cedula INT NOT NULL,
  doctores_especialidad VARCHAR(50) NOT NULL,
  person_nombre VARCHAR(100),
  person_apellido VARCHAR(100),
  doctores_nombre VARCHAR(100),
  doctores_apellido VARCHAR(100),
  doctores_consultorio VARCHAR(50) NOT NULL,
  FOREIGN KEY (person_cedula) REFERENCES person(cedula),
  FOREIGN KEY (doctores_especialidad) REFERENCES doctores(especialidad)
);