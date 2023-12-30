export const querys = {
    getAllProducts: `SELECT  C.TituloCancion ,
    Ar.NombreArtista ,  A.TituloAlbum ,
    C.RutaArchivo , A.RutaImagen  FROM  Canciones C INNER JOIN Albumes A ON C.AlbumID = A.AlbumID INNER JOIN Artistas Ar ON C.ArtistaID = Ar.ArtistaID;`,
    getAlbums: `select A.AlbumID, A.TituloAlbum, A.RutaImagen, A.Año, Art.NombreArtista  from Albumes A inner join Artistas Art  on A.ArtistaID=Art.ArtistaID; `,
    
    getOneAlbum:`	SELECT C.CancionID, C.TituloCancion ,
    Ar.NombreArtista ,  A.TituloAlbum ,
    C.RutaArchivo , A.RutaImagen  FROM  Canciones C INNER JOIN Albumes A ON C.AlbumID = A.AlbumID INNER JOIN Artistas Ar ON C.ArtistaID = Ar.ArtistaID where A.AlbumID = @Id; `,
    
    
    getProducById: "SELECT * FROM Products Where Id = @Id",
    addNewProduct:
      "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
    deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
    getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
    updateProductById:
      "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  };