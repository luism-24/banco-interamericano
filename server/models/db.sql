CREATE TABLE USUARIOS(

  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  telefono VARCHAR(30) NOT NULL,
  contraseña VARCHAR(40) NOT NULL,
  codigo VARCHAR(20) NOT NULL,
  id_pais INTEGER NOT NULL,
  id_rol INTEGER NOT NULL,
  numCuenta VARCHAR(30) NOT NULL

);

CREATE TABLE CUENTAS(

  id SERIAL,
  numeroC VARCHAR(30) NOT NULL PRIMARY KEY,
  saldo DEC(8,2) NOT NULL DEFAULT 0,
  id_tipoC INTEGER NOT NULL

);

CREATE TABLE TIPO_CUENTAS (

  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL

);

CREATE TABLE ROLES (

  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL

);

CREATE TABLE PAISES (

  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  moneda VARCHAR(30) NOT NULL

);

CREATE TABLE OPERACIONES (

  id SERIAL PRIMARY KEY,
  monto DEC(8,2) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  id_usuario_realiza INTEGER NOT NULL,
  id_usuario_destino INTEGER NOT NULL,
  id_tipoO INTEGER NOT NULL

);

CREATE TABLE TIPO_OPERACIONES (

  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL

);

alter table USUARIOS 
    add constraint fk_users_countries
    foreign key (id_pais) 
    REFERENCES PAISES (id);

alter table USUARIOS 
    add constraint fk_users_rols
    foreign key (id_rol) 
    REFERENCES ROLES (id);

alter table USUARIOS 
    add constraint fk_users_cuentas
    foreign key (numCuenta) 
    REFERENCES CUENTAS (numeroC);

alter table CUENTAS
    add constraint fk_cuentas_tipoC
    foreign key (id_tipoC) 
    REFERENCES TIPO_CUENTAS (id);

alter table OPERACIONES
    add constraint fk_operations_user1
    foreign key (id_usuario_realiza) 
    REFERENCES USUARIOS (id);

alter table OPERACIONES
    add constraint fk_operations_user2
    foreign key (id_usuario_destino) 
    REFERENCES USUARIOS (id);

alter table OPERACIONES
    add constraint fk_operations_tipoO
    foreign key (id_tipoO) 
    REFERENCES TIPO_OPERACIONES (id);

/* inserts tipos de cuenta, roles, paises, tipos de operaciones */
INSERT INTO TIPO_CUENTAS(nombre) VALUES('Corriente');
INSERT INTO TIPO_CUENTAS(nombre) VALUES('De ahorro');

INSERT INTO CUENTAS(numeroC, saldo, id_tipoC) VALUES('55555', 755000, 1);
update PAISES set nombre='Chile' moneda="Peso chileno"
  where id=2;

INSERT INTO ROLES(nombre) VALUES('Administrador');
INSERT INTO ROLES(nombre) VALUES('Cliente');

INSERT INTO TIPO_OPERACIONES(nombre) VALUES('Consignacion');
INSERT INTO TIPO_OPERACIONES(nombre) VALUES('Retiro');
INSERT INTO TIPO_OPERACIONES(nombre) VALUES('Transferencia');

INSERT INTO PAISES(nombre, moneda) VALUES('Colombia', 'Pesos');
