CREATE TABLE USUARIOS(

  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  telefono VARCHAR(30) NOT NULL,
  contraseña VARCHAR(40) NOT NULL,
  codigo VARCHAR(20) NOT NULL,
  id_pais INT(6) NOT NULL,
  id_rol INT(6) NOT NULL,
  id_cuenta INT(6) NOT NULL

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE CUENTAS(

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  numeroC VARCHAR(30) NOT NULL,
  saldo DEC(8,2) NOT NULL,
  id_tipoC INT(6) NOT NULL

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE TIPO_CUENTAS (

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE ROLES (

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE PAISES (

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  moneda VARCHAR(30) NOT NULL

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE OPERACIONES (

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  monto DEC(8,2) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  id_usuario_realiza INT(6) NOT NULL,
  id_usuario_destino INT(6) NOT NULL,
  id_tipoO INT(6) NOT NULL

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE TIPO_OPERACIONES (

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL

)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;
/*--Muestra las tablas creadas--
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