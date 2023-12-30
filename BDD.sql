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
    RutaImagen VARCHAR(800) NOT NULL,
    Año INT, -- Nuevo atributo para almacenar el año del álbum
    ArtistaID INT,
    FOREIGN KEY (ArtistaID) REFERENCES Artistas(ArtistaID)
);

-- Tabla de canciones
CREATE TABLE Canciones (
    CancionID INT PRIMARY KEY IDENTITY(1,1),
    TituloCancion VARCHAR(100) NOT NULL,
    AlbumID INT,
    ArtistaID INT,
    RutaArchivo VARCHAR(800) NOT NULL,
    RutaArchivoBateria VARCHAR(800),  -- Nuevos atributos
    RutaArchivoInstrumental VARCHAR(800),  -- Nuevos atributos
    RutaArchivoBajo VARCHAR(800),  -- Nuevos atributos
    RutaArchivoVoces VARCHAR(800),  -- Nuevos atributos
    Video VARCHAR(800),  -- Nuevos atributos
    Letra VARCHAR(800),  -- Nuevos atributos
    Reproducciones INT DEFAULT 0,  -- Nuevo atributo para contar las reproducciones
    Duracion INT,
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
    Descripcion VARCHAR(800),
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
    Instrumento VARCHAR(800),
    Password VARCHAR(800) NOT NULL,
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

-- Tabla de reproducciones de canciones por usuario
CREATE TABLE ReproduccionesCancion (
    ReproduccionID INT PRIMARY KEY IDENTITY(1,1),
    UsuarioID INT,
    CancionID INT,
    FechaReproduccion DATETIME,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (CancionID) REFERENCES Canciones(CancionID)
);




-- Eliminar tablas
DROP TABLE IF EXISTS ReproduccionesCancion;
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


-- -- Insertar canciones
INSERT INTO Artistas (NombreArtista) VALUES ('Funky');

-- Obtener el último ID insertado en la tabla Artistas
DECLARE @UltimoArtista INT;
SET @UltimoArtista = SCOPE_IDENTITY();

-- Insertar álbumes
INSERT INTO Albumes (TituloAlbum, ArtistaID,RutaImagen,Año) VALUES
  ('Indestructible', @UltimoArtista,'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg',2015);

  -- Obtener el último ID insertado la tabla Albumes
DECLARE @UltimoAlbum INT;
SET @UltimoAlbum = SCOPE_IDENTITY();

  -- Insertar canciones
INSERT INTO Canciones (TituloCancion, AlbumID, ArtistaID, RutaArchivo, Duracion) VALUES
  ('Es Imposible', 1,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/01+Funky+%E2%80%94+Es+Imposible.mp3', 240),
  ('Eres mi Bendicion', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/02+Funky+%E2%80%94+Eres+Mi+Bendicion+(feat.+Alex+Zurdo).mp3', 180),
  ('Fiel', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/03+Funky+%E2%80%94+Fiel.mp3', 200),
  ('Mi Peor Error', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/04+Funky+%E2%80%94+Mi+Peor+Error+(feat.+Marcela+Gandara).mp3', 220),
  ('Contigo', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/05+Funky+%E2%80%94+Contigo.mp3', 220),
  ('Invencible', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/06+Funky+%E2%80%94+Invencible+(feat.+Ingrid+Rosario).mp3', 220),
  ('Entre Tus Brazos', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/07+Funky+%E2%80%94+Entre+Tus+Brazos+(feat.+Daniel+Calveti+%26+Any+Puello).mp3', 220),
  ('Como No Voy a Creer', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/08+Funky+%E2%80%94+Como+No+Voy+a+Creer.mp3', 220),
  ('Se Nota En Tus Ojos', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/09+Funky+%E2%80%94+Se+Nota+En+Tus+Ojos.mp3', 220),
  ('No Te Enredes', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/10+Funky+%E2%80%94+No+Te+Enredes.mp3', 220),
  ('Cicatriz', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/11+Funky+%E2%80%94+Cicatriz+(feat.+Musiko).mp3', 220),
  ('Va a Caer La Lluvia', @UltimoAlbum,  @UltimoArtista, 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/12+Funky+%E2%80%94+Va+a+Caer+La+Lluvia.mp3', 220)
  ;

-- Insertar en la tabla de Categorías
INSERT INTO Categorias (NombreCategoria) VALUES ('Cristianas');
INSERT INTO Categorias (NombreCategoria) VALUES ('Ebenezer');

-- Insertar en la tabla de ListasReproduccion
INSERT INTO ListasReproduccion (NombreLista, Descripcion, CategoriaID) VALUES ('Lista1-Jubilo', 'Descripción de Lista1', 1);
INSERT INTO ListasReproduccion (NombreLista, Descripcion, CategoriaID) VALUES ('Lista2-Ensayo', 'Descripción de Lista2', 2);

-- Insertar en la tabla de ListaCanciones
INSERT INTO ListaCanciones (ListaID, CancionID, Orden) VALUES (1, 1, 1);
INSERT INTO ListaCanciones (ListaID, CancionID, Orden) VALUES (2, 2, 1);

-- Insertar en la tabla de Roles
INSERT INTO Roles (NombreRol) VALUES ('Administrador');
INSERT INTO Roles (NombreRol) VALUES ('Invitado');

-- Insertar en la tabla de Usuarios
INSERT INTO Usuarios (Nombre, Apellidos, Alias, Pais, Departamento, FechaNacimiento, Instrumento, Password, Correo, RolID) VALUES ('Sergio Ariel', 'Ramirez Castro', 'Sergio1990', 'Guatemala', 'Guatemala', '1990-08-12', 'Piano', '1234', 'sergiounix@gmail.com', 1);
INSERT INTO Usuarios (Nombre, Apellidos, Alias, Pais, Departamento, FechaNacimiento, Instrumento, Password, Correo, RolID) VALUES ('Madelyn Lorena', 'Méndez Barraza', 'Madelyn1993', 'Guatemala', 'Guatemala', '1993-01-05', 'Canto', '1234', 'madesitalor@gmail.com', 2);

-- Insertar en la tabla de MembresiaUsuario
INSERT INTO MembresiaUsuario (UsuarioID, FechaInicio, FechaFin) VALUES (1, '2023-11-25', '2035-12-31');
INSERT INTO MembresiaUsuario (UsuarioID, FechaInicio, FechaFin) VALUES (2, '2023-11-25', '2035-12-31');

-- Insertar en la tabla de CancionesFavoritas
INSERT INTO CancionesFavoritas (UsuarioID, CancionID) VALUES (1, 1);
INSERT INTO CancionesFavoritas (UsuarioID, CancionID) VALUES (2, 2);

-- Insertar en la tabla de ListasReproduccionFavoritas
INSERT INTO ListasReproduccionFavoritas (UsuarioID, ListaID) VALUES (1, 1);
INSERT INTO ListasReproduccionFavoritas (UsuarioID, ListaID) VALUES (2, 2);

-- Insertar en la tabla de ReproduccionesCancion (simulado, ajusta según sea necesario)
INSERT INTO ReproduccionesCancion (UsuarioID, CancionID, FechaReproduccion) VALUES (1, 1, GETDATE());
INSERT INTO ReproduccionesCancion (UsuarioID, CancionID, FechaReproduccion) VALUES (2, 2, GETDATE());
