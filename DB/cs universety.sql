CREATE DATABASE cs;
USE cs;

CREATE TABLE usuario (
  idusuario INT PRIMARY KEY auto_increment,
  nick VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  fkVoltaic INT,
  FOREIGN KEY (fkVoltaic) REFERENCES voltaic (idvoltaic)
);

CREATE TABLE voltaic (
  idvoltaic INT PRIMARY KEY auto_increment,
  static FLOAT,
  dynamic FLOAT,
  speed FLOAT,
  evasive FLOAT,
  smooth FLOAT,
  reactive FLOAT
);

select * from usuario;	
select * from voltaic;

drop database cs;

drop table voltaic;

drop database cs;