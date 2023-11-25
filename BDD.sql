-- Crear base de datos
CREATE DATABASE SpotifyMusic;


-- Usar la base de datos
USE SpotifyMusic;

-- Tabla de artistas
CREATE TABLE Artistas (
    ArtistaID INT PRIMARY KEY IDENTITY(1,1),
    NombreArtista VARCHAR(100) NOT NULL
);

-- Tabla de álbumes
CREATE TABLE Albumes (
    AlbumID INT PRIMARY KEY IDENTITY(1,1),
    TituloAlbum VARCHAR(100) NOT NULL,
    RutaImagen VARCHAR(255) NOT NULL,
    ArtistaID INT,
    FOREIGN KEY (ArtistaID) REFERENCES Artistas(ArtistaID)
);

-- Tabla de canciones
CREATE TABLE Canciones (
    CancionID INT PRIMARY KEY IDENTITY(1,1),
    TituloCancion VARCHAR(100) NOT NULL,
    AlbumID INT,
    ArtistaID INT,
    RutaArchivo VARCHAR(255) NOT NULL,  -- Ruta del archivo físico de la canción
    Duracion INT,  -- Duración en segundos
    FOREIGN KEY (AlbumID) REFERENCES Albumes(AlbumID),
    FOREIGN KEY (ArtistaID) REFERENCES Artistas(ArtistaID)
);

-- Tabla de categorías
CREATE TABLE Categorias (
    CategoriaID INT PRIMARY KEY IDENTITY(1,1),
    NombreCategoria VARCHAR(50) NOT NULL
);

-- Tabla de listas de reproducción
CREATE TABLE ListasReproduccion (
    ListaID INT PRIMARY KEY IDENTITY(1,1),
    NombreLista VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255),
    CategoriaID INT,
    FOREIGN KEY (CategoriaID) REFERENCES Categorias(CategoriaID)
);

-- Tabla de relación entre canciones y listas de reproducción
CREATE TABLE ListaCanciones (
    ListaID INT,
    CancionID INT,
    Orden INT,  -- Orden de reproducción
    PRIMARY KEY (ListaID, CancionID),
    FOREIGN KEY (ListaID) REFERENCES ListasReproduccion(ListaID),
    FOREIGN KEY (CancionID) REFERENCES Canciones(CancionID)
);

-- Tabla de roles
CREATE TABLE Roles (
    RolID INT PRIMARY KEY IDENTITY(1,1),
    NombreRol VARCHAR(50) NOT NULL
);


-- Tabla de usuarios
CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL,
    Apellidos VARCHAR(50) NOT NULL,
    Alias VARCHAR(20) NOT NULL,
    Pais VARCHAR(50),
    Departamento VARCHAR(50),
    FechaNacimiento DATE,
    Instrumento VARCHAR(50),
    Password VARCHAR(255) NOT NULL,
    Correo VARCHAR(100) UNIQUE NOT NULL,
    RolID INT,
    FOREIGN KEY (RolID) REFERENCES Roles(RolID)
);


-- Tabla de membresía de usuario
CREATE TABLE MembresiaUsuario (
    MembresiaID INT PRIMARY KEY IDENTITY(1,1),
    UsuarioID INT,
    FechaInicio DATE,
    FechaFin DATE,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

-- Tabla de relación entre usuarios y canciones favoritas
CREATE TABLE CancionesFavoritas (
    UsuarioID INT,
    CancionID INT,
    PRIMARY KEY (UsuarioID, CancionID),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (CancionID) REFERENCES Canciones(CancionID)
);

-- Tabla de relación entre usuarios y listas de reproducción favoritas
CREATE TABLE ListasReproduccionFavoritas (
    UsuarioID INT,
    ListaID INT,
    PRIMARY KEY (UsuarioID, ListaID),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (ListaID) REFERENCES ListasReproduccion(ListaID)
);


-- Eliminar relaciones antes de eliminar las tablas
ALTER TABLE ListaCanciones DROP CONSTRAINT FK_ListaCanciones_ListasReproduccion;
ALTER TABLE ListaCanciones DROP CONSTRAINT FK_ListaCanciones_Canciones;
ALTER TABLE CancionesFavoritas DROP CONSTRAINT FK_CancionesFavoritas_Usuarios;
ALTER TABLE CancionesFavoritas DROP CONSTRAINT FK_CancionesFavoritas_Canciones;
ALTER TABLE ListasReproduccionFavoritas DROP CONSTRAINT FK_ListasReproduccionFavoritas_Usuarios;
ALTER TABLE ListasReproduccionFavoritas DROP CONSTRAINT FK_ListasReproduccionFavoritas_ListasReproduccion;
ALTER TABLE Usuarios DROP CONSTRAINT FK_Usuarios_Roles;
ALTER TABLE MembresiaUsuario DROP CONSTRAINT FK_MembresiaUsuario_Usuarios;

-- Eliminar tablas
DROP TABLE IF EXISTS ListaCanciones;
DROP TABLE IF EXISTS ListasReproduccion;
DROP TABLE IF EXISTS CancionesFavoritas;
DROP TABLE IF EXISTS Categorias;
DROP TABLE IF EXISTS Canciones;
DROP TABLE IF EXISTS Albumes;
DROP TABLE IF EXISTS Artistas;
DROP TABLE IF EXISTS ListasReproduccionFavoritas;
DROP TABLE IF EXISTS Usuarios;
DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS MembresiaUsuario;


-- Insertar artistas
INSERT INTO Artistas (NombreArtista) VALUES ('Artista1'), ('Artista2'), ('Artista3');

-- Insertar álbumes
INSERT INTO Albumes (TituloAlbum, ArtistaID,RutaImagen) VALUES
  ('Album1', 1,'/imagen/imagen.jpg'),
  ('Album2', 2,'/imagen/imagen.jpg'),
  ('Album3', 3,'/imagen/imagen.jpg');

-- Insertar canciones
INSERT INTO Canciones (TituloCancion, AlbumID, ArtistaID, RutaArchivo, Duracion) VALUES
  ('Cancion1', 1, 1, '/canciones/cancion1.mp3', 240),
  ('Cancion2', 1, 1, '/canciones/cancion2.mp3', 180),
  ('Cancion3', 2, 2, '/canciones/cancion3.mp3', 200),
  ('Cancion4', 3, 3, '/canciones/cancion4.mp3', 220);

-- Insertar categorías
INSERT INTO Categorias (NombreCategoria) VALUES ('Pop'), ('Rock'), ('Electrónica');

-- Insertar listas de reproducción
INSERT INTO ListasReproduccion (NombreLista, Descripcion, CategoriaID) VALUES
  ('Lista1', 'Lista de Pop', 1),
  ('Lista2', 'Lista de Rock', 2),
  ('Lista3', 'Lista de Electrónica', 3);

-- Insertar relación entre canciones y listas de reproducción
INSERT INTO ListaCanciones (ListaID, CancionID, Orden) VALUES
  (1, 1, 1),
  (1, 2, 2),
  (2, 3, 1),
  (3, 4, 1);

-- Insertar roles
INSERT INTO Roles (NombreRol) VALUES ('Administrador');
INSERT INTO Roles (NombreRol) VALUES ('Invitado');
INSERT INTO Roles (NombreRol) VALUES ('Premium');

-- Insertar usuarios
INSERT INTO Usuarios (Nombre, Apellidos, Alias, Pais, Departamento, FechaNacimiento, Instrumento, Password, Correo, RolID) VALUES
  ('Usuario1', 'Apellido1', 'Alias1', 'Pais1', 'Departamento1', '1990-01-01', 'Guitarra', 'password1', 'usuario1@ejemplo.com', 1),
  ('Usuario2', 'Apellido2', 'Alias2', 'Pais2', 'Departamento2', '1985-05-15', 'Batería', 'password2', 'usuario2@ejemplo.com', 2),
  ('Usuario3', 'Apellido3', 'Alias3', 'Pais3', 'Departamento3', '1995-08-20', 'Piano', 'password3', 'usuario3@ejemplo.com', 3);

-- Insertar membresía de usuario
INSERT INTO MembresiaUsuario (UsuarioID, FechaInicio, FechaFin) VALUES
  (1, '2022-01-01', '2023-01-01'),
  (2, '2022-03-01', '2023-03-01'),
  (3, '2022-05-01', '2023-05-01');

-- Insertar relaciones entre usuarios y canciones/listas favoritas
INSERT INTO CancionesFavoritas (UsuarioID, CancionID) VALUES (1, 1), (2, 3), (3, 4);
INSERT INTO ListasReproduccionFavoritas (UsuarioID, ListaID) VALUES (1, 1), (2, 2), (3, 3);
