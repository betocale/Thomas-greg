-- ==========================================
-- BASE DE DATOS BETO SHOP
-- ==========================================

CREATE DATABASE IF NOT EXISTS beto_shop
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE beto_shop;


-- ==========================================
-- USUARIOS (REGISTRO Y LOGIN)
-- ==========================================

CREATE TABLE usuarios (

    usuario_id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(120) NOT NULL,

    apellido VARCHAR(120) NOT NULL,

    correo VARCHAR(150) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    telefono VARCHAR(30),

    direccion VARCHAR(250),

    rol ENUM(
        'Administrador',
        'Empleado',
        'Cliente'
    ) DEFAULT 'Cliente',

    estado ENUM(
        'Activo',
        'Inactivo'
    ) DEFAULT 'Activo',

    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- ==========================================
-- CATEGORIAS
-- ==========================================

CREATE TABLE categorias (

    categoria_id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    descripcion TEXT,

    estado BOOLEAN DEFAULT TRUE

);



-- ==========================================
-- PRODUCTOS
-- ==========================================

CREATE TABLE productos (

    producto_id INT AUTO_INCREMENT PRIMARY KEY,

    categoria_id INT NOT NULL,

    nombre VARCHAR(200) NOT NULL,

    descripcion TEXT,

    precio DECIMAL(12,2) NOT NULL,

    imagen VARCHAR(500),

    estado ENUM(
        'Disponible',
        'Agotado',
        'Inactivo'
    ) DEFAULT 'Disponible',

    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(categoria_id)
    REFERENCES categorias(categoria_id)
    ON DELETE CASCADE

);



-- ==========================================
-- INVENTARIO
-- ==========================================

CREATE TABLE inventario (

    inventario_id INT AUTO_INCREMENT PRIMARY KEY,

    producto_id INT UNIQUE,

    stock INT DEFAULT 0,

    stock_minimo INT DEFAULT 5,

    ubicacion VARCHAR(100),

    ultima_actualizacion TIMESTAMP 
    DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,


    FOREIGN KEY(producto_id)
    REFERENCES productos(producto_id)
    ON DELETE CASCADE

);



-- ==========================================
-- MOVIMIENTOS INVENTARIO
-- ==========================================

CREATE TABLE movimientos_inventario (

    movimiento_id INT AUTO_INCREMENT PRIMARY KEY,

    producto_id INT,

    tipo ENUM(
        'Entrada',
        'Salida'
    ),

    cantidad INT,

    motivo VARCHAR(200),

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(producto_id)
    REFERENCES productos(producto_id)

);



-- ==========================================
-- PEDIDOS
-- ==========================================

CREATE TABLE pedidos (

    pedido_id INT AUTO_INCREMENT PRIMARY KEY,

    usuario_id INT NOT NULL,

    subtotal DECIMAL(12,2),

    descuento DECIMAL(12,2) DEFAULT 0,

    total DECIMAL(12,2),

    estado ENUM(
        'Pendiente',
        'Pagado',
        'Enviado',
        'Entregado',
        'Cancelado'
    )
    DEFAULT 'Pendiente',

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(usuario_id)
    REFERENCES usuarios(usuario_id)

);



-- ==========================================
-- DETALLE PEDIDOS
-- ==========================================

CREATE TABLE detalle_pedidos (

    detalle_id INT AUTO_INCREMENT PRIMARY KEY,

    pedido_id INT,

    producto_id INT,

    cantidad INT,

    precio DECIMAL(12,2),

    subtotal DECIMAL(12,2),


    FOREIGN KEY(pedido_id)
    REFERENCES pedidos(pedido_id)
    ON DELETE CASCADE,


    FOREIGN KEY(producto_id)
    REFERENCES productos(producto_id)

);



-- ==========================================
-- PAGOS
-- ==========================================

CREATE TABLE pagos (

    pago_id INT AUTO_INCREMENT PRIMARY KEY,

    pedido_id INT,

    metodo VARCHAR(80),

    referencia VARCHAR(120),

    valor DECIMAL(12,2),

    estado ENUM(
        'Aprobado',
        'Pendiente',
        'Rechazado'
    )
    DEFAULT 'Pendiente',

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(pedido_id)
    REFERENCES pedidos(pedido_id)

);



-- ==========================================
-- ENVIOS
-- ==========================================

CREATE TABLE envios (

    envio_id INT AUTO_INCREMENT PRIMARY KEY,

    pedido_id INT,

    transportadora VARCHAR(100),

    guia VARCHAR(100),

    direccion TEXT,

    ciudad VARCHAR(100),

    estado ENUM(
        'Preparando',
        'Despachado',
        'En Ruta',
        'Entregado'
    )
    DEFAULT 'Preparando',

    fecha_envio DATE,

    fecha_entrega DATE,


    FOREIGN KEY(pedido_id)
    REFERENCES pedidos(pedido_id)

);



-- ==========================================
-- CARRITO
-- ==========================================

CREATE TABLE carrito (

    carrito_id INT AUTO_INCREMENT PRIMARY KEY,

    usuario_id INT,

    producto_id INT,

    cantidad INT DEFAULT 1,

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(usuario_id)
    REFERENCES usuarios(usuario_id),


    FOREIGN KEY(producto_id)
    REFERENCES productos(producto_id)

);



-- ==========================================
-- FAVORITOS
-- ==========================================

CREATE TABLE favoritos (

    favorito_id INT AUTO_INCREMENT PRIMARY KEY,

    usuario_id INT,

    producto_id INT,

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(usuario_id)
    REFERENCES usuarios(usuario_id),


    FOREIGN KEY(producto_id)
    REFERENCES productos(producto_id)

);



-- ==========================================
-- AUDITORIA
-- ==========================================

CREATE TABLE auditoria (

    auditoria_id INT AUTO_INCREMENT PRIMARY KEY,

    usuario_id INT,

    accion VARCHAR(200),

    modulo VARCHAR(100),

    descripcion TEXT,

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(usuario_id)
    REFERENCES usuarios(usuario_id)

);



-- ==========================================
-- REPORTES
-- ==========================================

CREATE TABLE reportes (

    reporte_id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(150),

    descripcion TEXT,

    tipo VARCHAR(100),

    fecha_generacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    usuario_id INT,


    FOREIGN KEY(usuario_id)
    REFERENCES usuarios(usuario_id)

);



-- ==========================================
-- CONFIGURACION EMPRESA
-- ==========================================

CREATE TABLE configuracion (

    configuracion_id INT AUTO_INCREMENT PRIMARY KEY,

    empresa VARCHAR(150),

    nit VARCHAR(50),

    telefono VARCHAR(30),

    correo VARCHAR(150),

    direccion TEXT,

    iva DECIMAL(5,2),

    moneda VARCHAR(20)

);



-- ==========================================
-- SESIONES LOGIN
-- ==========================================

CREATE TABLE sesiones (

    sesion_id INT AUTO_INCREMENT PRIMARY KEY,

    usuario_id INT,

    token VARCHAR(255),

    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    fecha_expiracion DATETIME,


    FOREIGN KEY(usuario_id)
    REFERENCES usuarios(usuario_id)

);



-- ==========================================
-- RECUPERAR PASSWORD
-- ==========================================

CREATE TABLE recuperacion_password (

    recuperacion_id INT AUTO_INCREMENT PRIMARY KEY,

    usuario_id INT,

    codigo VARCHAR(100),

    expiracion DATETIME,


    FOREIGN KEY(usuario_id)
    REFERENCES usuarios(usuario_id)

);



-- ==========================================
-- DATOS INICIALES
-- ==========================================


-- ADMINISTRADOR

INSERT INTO usuarios
(
nombre,
apellido,
correo,
password,
rol
)
VALUES
(
'Administrador',
'Beto Shop',
'admin@betoshop.com',
'123456',
'Administrador'
);



-- CATEGORIAS

INSERT INTO categorias
(nombre,descripcion)
VALUES

('Computadores',
'Portátiles y equipos escritorio'),

('Celulares',
'Smartphones'),

('Gaming',
'Equipos gamer'),

('Accesorios',
'Mouse teclado audífonos');


-- PRODUCTOS

INSERT INTO productos
(
categoria_id,
nombre,
descripcion,
precio,
imagen
)
VALUES

(
1,
'Laptop ASUS Gamer',
'Laptop RTX para videojuegos',
4500000,
'laptop-asus.jpg'
),

(
3,
'RTX 5090 Ti',
'Tarjeta gráfica profesional',
8000000,
'rtx5090.jpg'
),

(
2,
'Samsung Galaxy S25',
'Celular gama alta',
3500000,
's25.jpg'
);



-- INVENTARIO

INSERT INTO inventario
(
producto_id,
stock,
stock_minimo,
ubicacion
)
VALUES

(1,10,3,'Bodega Principal'),

(2,5,2,'Bodega Principal'),

(3,20,5,'Bodega Principal');



-- CONFIGURACION

INSERT INTO configuracion
(
empresa,
nit,
telefono,
correo,
direccion,
iva,
moneda
)
VALUES
(
'Beto Shop',
'900000000-1',
'3000000000',
'contacto@betoshop.com',
'Colombia',
19,
'COP'
);