CREATE DATABASE banco;

use banco;

CREATE TABLE users(

  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

/*CREATE TABLE curso(

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  idsemestre int(6) NOT NULL,
  FOREIGN KEY (idsemestre) REFERENCES semestre(id) ON DELETE CASCADE ON UPDATE CASCADE

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE estudiante (

  cedula VARCHAR(30) NOT NULL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  idsemestre int(6) NOT NULL,
  FOREIGN KEY (idsemestre) REFERENCES semestre(id) ON DELETE CASCADE ON UPDATE CASCADE

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE matricula (

  cedulaes VARCHAR(30) NOT NULL,
  idcurso INT(6) UNSIGNED NOT NULL,

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

--Muestra las tablas creadas--
show tables;

--Inserta los semestres--*10
INSERT INTO semestre(nombre) VALUES('Semestre 1');

--Inserto los cursos en cada semestre --*50
INSERT INTO curso(nombre, idsemestre) VALUES('Formación Integral I', 1);

--Agrega llaver foraneas a tabla matricula
ALTER TABLE matricula
  ADD CONSTRAINT matrifke
  FOREIGN KEY (cedulaes) REFERENCES estudiante(cedula) ON DELETE CASCADE ON UPDATE CASCADE;
  
  
ALTER TABLE matricula
  ADD CONSTRAINT matrifkc
  FOREIGN KEY (idcurso) REFERENCES curso(id) ON DELETE CASCADE ON UPDATE CASCADE;
  */