CREATE DATABASE Tienda;
USE Tienda;

/*
CREATE TABLE productos(
id INT auto_increment primary key,
nombre varchar(50),
precio decimal (6,2),
stock INT unsigned 
);
/*


/*
CREATE TABLE clientes(
id int auto_increment primary key,
nombre varchar(50),
email varchar(50)
);
*/

ALTER TABLE productos ADD COLUMN categorias varchar(30);
ALTER TABLE productos CHANGE COLUMN categorias categoria varchar(30);
ALTER TABLE productos DROP COLUMN categoria;
ALTER TABLE productos MODIFY COLUMN nombre varchar(70);
ALTER TABLE clientes add column  telefono varchar(10);
alter table clientes modify column telefono varchar(15);

DROP table productos;
drop table clientes;


CREATE TABLE productos(
id INT auto_increment primary key,
nombre varchar(50),
precio decimal (6,2),
stock INT unsigned 
);

ALTER TABLE productos ADD COLUMN categorias varchar(30);
insert into productos (nombre, precio, stock, categorias)
Values ("Ordenador", 500, 30, "PC Gaming"), ("Ps5", 700, 5, "Consolas");

insert into productos (nombre,precio) 
Values ("Bicicleta", 1000);

select * from productos;

truncate table productos;
select * from productos;

ALTER TABLE productos ADD COLUMN categorias varchar(30);
insert into productos (nombre, precio, stock, categorias)
Values ("Ordenador", 500, 30, "PC Gaming"), ("Ps5", 700, 5, "Consolas");

insert into productos (nombre,precio) 
Values ("Bicicleta", 1000);

select nombre from productos;
select nombre as nombreProducto from productos;

CREATE TABLE clientes(
id int auto_increment primary key,
nombre varchar(50),
email varchar(50)
);

alter table clientes add column edad varchar(30);
insert into clientes ( nombre, email, edad)
values ("Alejandro", "miov", 31);

select * from clientes;
/*
select concat (nombre, `tiene este precio `, precio) es nombreCompuesto from productos;
*/
select count (id) as productos from clientes;

select *from clientes;
insert into clientes ( nombre, email, edad)
values ("Sergio", "Seergio.correo", 24), ("Victor", "Victor.correo", 24);

select * from clientes;

















