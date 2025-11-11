# JOINS
 /*
CREATE DATABASE tienda_joins;
 */
Use tienda_joins;
/* 
CREATE TABLE clientes (

id INT auto_increment primary key,

nombre varchar(50),

apellido varchar(100),

dni varchar(9)

);
 
CREATE TABLE pedidos (

id_pedido INT auto_increment primary key,

id_cliente INT,

fecha DATE,

total decimal(7,2),

foreign key (id_cliente) references clientes(id)

);
 
INSERT INTO clientes (nombre) values ("Luis"), ("Alejandro"), ("Vanessa");

Select *  from clientes;
 
INSERT INTO pedidos (id_cliente,fecha, total) values

(1, '2025-10-25', 120.5), (1, '2025-11-02', 45.00),(2, '2025-11-03', 80.00);

Select *  from pedidos;

INSERT INTO pedidos (fecha, total) values ("2025-09-25", 45.50);

*/

Select *  from pedidos;
select * from clientes;
## devuelve filas con coincidencias en ambas tablas
select cl.nombre, ped.fecha, ped.total  from clientes cl
inner join pedidos ped on cl.id = ped.id_cliente;

## devuelve filas con coincidencias en ambas tablas

select * from clientes cl
left join pedidos ped on cl.id = ped.id_cliente;


select * from clientes cl
right join pedidos ped on cl.id = ped.id_cliente;

insert into pedidos(fecha, total) values ("2025-09-25", 45.50);

select * from clientes cl
inner join pedidos p on cl.id= p.id_cliente;

select cl.nombre, SUM(p.total) as suma_pedidos from clientes cl
inner join pedidos p on cl.id = p.id_cliente
where p.total> 45
group by cl.nombre
having suma_pedidos > 100 ;


# 28. Nombre del cliente y su total gastado (SUM) ordenado de forma descendenteç

select cl.nombre, sum(p.total) as total_gastado from clientes cl
inner join pedidos p on cl.id = p.id_cliente 
group by cl.nombre
order by cl.nombre desc;


# 29. Cliente con más pedidos. Tip: Usar Limit 1

select cl.nombre, count(p.total) as total_pedidos from clientes cl
inner join pedidos p on cl.id = p.id_cliente 
group by cl.nombre
order by total_pedidos desc
limit 1;
# 30. Mostrar todos los clientes, tengan o no pedidos.

select * from clientes cl
left join pedidos ped on cl.id = ped.id_cliente;

# 31. Mostrar todos los clientes que han gastado más de 100€ (HAVING). Tip: Debes agrupar por nombre para sumar sus cantidades

select cl.nombre, sum(p.total) as total_suma_pedidos from clientes cl
inner join pedidos p on cl.id = p.id_cliente
group by cl.nombre 
having total_suma_pedidos>100;

 



 