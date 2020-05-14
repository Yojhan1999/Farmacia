CREATE DATABASE farmacia;
use farmacia;


CREATE TABLE Pedido
(
    id_pedido INT NOT NULL PRIMARY KEY, -- primary key column
    id_producto INT NOT NULL,
    id_usuario INT NOT NULL,
    valor [NVARCHAR](50) NOT NULL,
    cantidad INT NOT NULL
    -- specify more columns here
);
CREATE TABLE Usuario
(
    id_usuario INT NOT NULL PRIMARY KEY, -- primary key column
    nombre [NVARCHAR](50) NOT NULL,
    user [NVARCHAR](50) NOT NULL,
    pass [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
CREATE TABLE Producto
(
    id_producto INT NOT NULL PRIMARY KEY, -- primary key column
    nombre [NVARCHAR](50) NOT NULL,
    user [NVARCHAR](50) NOT NULL,
    pass [NVARCHAR](50) NOT NULL
    -- specify more columns here
);


