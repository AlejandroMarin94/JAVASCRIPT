/*
CREATE DATABASE Ejercicio1;


-- Seleccionar esa base de datos
USE Ejercicio1;

-- Crear tabla en la base de datos
CREATE TABLE Nacionalidades (
    nacionalidad_id INT AUTO_INCREMENT,
    nombre_nacionalidad VARCHAR(100) NOT NULL,
    PRIMARY KEY (nacionalidad_id)
);
-- Insertar algunos valores de ejemplo en Nacionalidades
INSERT INTO Nacionalidades (nombre_nacionalidad) 
VALUES 
    ('Española'),
    ('Argentina'),
    ('Mexicana'),
    ('Francesa'),
    ('Italiana');
-- Crear la tabla Usuarios con más columnas
CREATE TABLE Usuarios (
    usuario_id INT AUTO_INCREMENT,
    nombre_usuario VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    fecha_nacimiento DATE,
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    estado_activacion BOOLEAN DEFAULT TRUE, 
    nacionalidad_id INT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (usuario_id),
    FOREIGN KEY (nacionalidad_id) REFERENCES Nacionalidades(nacionalidad_id)
);
-- Insertar algunos valores de ejemplo en Usuarios
INSERT INTO Usuarios (nombre_usuario, email, fecha_nacimiento, direccion, telefono, estado_activacion, nacionalidad_id) 
VALUES 
    ('Juan Pérez', 'juan.perez@example.com', '1990-05-15', 'Calle Falsa 123, Madrid', null , TRUE, 1),
    ('Carlos García', 'carlos.garcia@example.com', '1985-08-22', 'Avenida Libertador 456, Buenos Aires', '222333444', TRUE, 2),
    ('María Rodríguez', 'maria.rodriguez@example.com', '1992-12-30', 'Calle 10 de Julio 789, Ciudad de México', '333444555', TRUE, 3),
    ('Sophie Dupont', 'sophie.dupont@example.com', '1988-07-10', 'Rue de Paris 22, París', '666888555', FALSE, 4),
    ('Luca Bianchi', 'luca.bianchi@example.com', '1995-03-25', 'Via Roma 101, Roma', '888999555', TRUE, 5);
 */   
# 1.Obtener todas las nacionalidades

select (nombre_nacionalidad) from Nacionalidades;


# 2.Obtener el usuario con id 1

select * from   usuarios where usuario_id=1;

# 3. Obtener los usuarios que no tengan telefono guardado, O SEA VALOR NULL
select * from usuarios where telefono is null;
# 4. Obtener los usuarios cuya dirección contenga "Madrid"

select * from usuarios where direccion like "Madrid";

# 5.Obtener el nombre, email del usuario que tenga un telefono que termine en 555

select nombre_usuario as nombre, email from usuarios where telefono like "%555";
# 6.Obtenen el telefono del usuario que empiece por la letra C y termine con a

select telefono from usuarios where nombre_usuario like "C%" and nombre_usuario like "%a";

# 7. Obtener la fecha de nacimiento de los usuarios, y ademas obtener separados el día, el mes y el año

select day (fecha_nacimiento) as dia, month(fecha_nacimiento), year(fecha_nacimiento) as año from usuarios;
# 8.Obtneer la cantidad de usuarios existentes
select count(usuario_id) as cantidad_usuarios from usuarios;
select count(nacionalidad_id) as cantidad_nacionalidades from nacionalidades;
# 9. Obtener la cantidad de usuarios que han nacido en el 1985;

select count(usuario_id) as usuarios_nacidos1985 from usuarios where year(fecha_nacimiento) like "1985";
# 10.Obten el nombre del usuario concatenado al telefono de los usuarios que tengan telefono

select concat(nombre_usuario, "tiene este numero ", telefono) as infortelefusuarios from usuarios where telefono is not null;
# 11. Obtener la CANTIDAD de usuarios que termine el correo en ".com" (resultado -> 5)
select count(usuario_id) as usuariosCorreo from usuarios where email like "%.com";
# 12. Obtener la cantidad de usuarios que no tienen telefono. (RESULTADO -> 1)

select count(usuario_id) as usuariosNotelef from usuarios where telefono is null;
# 13. Obtener la cantidad de usuarios que no tienen telefono O (= A OR) direccion (Resultaod -> 1)
select count(usuario_id) as UsuarioNotelefNodireccion from usuarios where telefono is null or direccion is null;