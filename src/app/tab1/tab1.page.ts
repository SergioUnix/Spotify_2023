import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  elemet:screens[]=[
    {
      name:"Alertas",
      url:"/alertas",
      icon:"alarm-outline"
    },
      {
        name:"ActionSheet",
        url:"/action-sheet",
        icon:"cafe-outline"
      },{
        name:"Tarjetas",
        url:'/tarjetas',
        icon:"image-outline"
      },
      {
        name:'Deber',
        url:'/deber',
        icon:'planet-outline'
      },
      {
        name:'Nasa',
        url:'/nasa',
        icon:'planet-outline'
      }
  
    ]

    miArreglo = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'];

    array_Buendia= [
      {
          "TituloCancion": "Cancion1",
          "NombreArtista": "Artista1",
          "TituloAlbum": [
              "Album1",
              "Album1"
          ],
          "RutaArchivo": "/canciones/cancion1.mp3",
          "RutaImagen": "/imagen/imagen.jpg"
      },
      {
          "TituloCancion": "Cancion2",
          "NombreArtista": "Artista1",
          "TituloAlbum": [
              "Album1",
              "Album1"
          ],
          "RutaArchivo": "/canciones/cancion2.mp3",
          "RutaImagen": "/imagen/imagen.jpg"
      },
      {
          "TituloCancion": "Cancion3",
          "NombreArtista": "Artista2",
          "TituloAlbum": [
              "Album2",
              "Album2"
          ],
          "RutaArchivo": "/canciones/cancion3.mp3",
          "RutaImagen": "/imagen/imagen.jpg"
      },
      {
          "TituloCancion": "Cancion4",
          "NombreArtista": "Artista3",
          "TituloAlbum": [
              "Album3",
              "Album3"
          ],
          "RutaArchivo": "/canciones/cancion4.mp3",
          "RutaImagen": "/imagen/imagen.jpg"
      },
      {
          "TituloCancion": "Es Imposible",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Album1",
              "Album1"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/01+Funky+%E2%80%94+Es+Imposible.mp3",
          "RutaImagen": "/imagen/imagen.jpg"
      },
      {
          "TituloCancion": "Eres mi Bendicion",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/02+Funky+%E2%80%94+Eres+Mi+Bendicion+(feat.+Alex+Zurdo).mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Fiel",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/03+Funky+%E2%80%94+Fiel.mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Mi Peor Error",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/04+Funky+%E2%80%94+Mi+Peor+Error+(feat.+Marcela+Gandara).mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Contigo",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/05+Funky+%E2%80%94+Contigo.mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Invencible",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/06+Funky+%E2%80%94+Invencible+(feat.+Ingrid+Rosario).mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Entre Tus Brazos",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/07+Funky+%E2%80%94+Entre+Tus+Brazos+(feat.+Daniel+Calveti+%26+Any+Puello).mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Como No Voy a Creer",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/08+Funky+%E2%80%94+Como+No+Voy+a+Creer.mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Se Nota En Tus Ojos",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/09+Funky+%E2%80%94+Se+Nota+En+Tus+Ojos.mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "No Te Enredes",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/10+Funky+%E2%80%94+No+Te+Enredes.mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Cicatriz",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/11+Funky+%E2%80%94+Cicatriz+(feat.+Musiko).mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      },
      {
          "TituloCancion": "Va a Caer La Lluvia",
          "NombreArtista": "Funky",
          "TituloAlbum": [
              "Indestructible",
              "Indestructible"
          ],
          "RutaArchivo": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/12+Funky+%E2%80%94+Va+a+Caer+La+Lluvia.mp3",
          "RutaImagen": "https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg"
      }
  ];

    constructor() {}
    ngOnInit(){}















  
}




interface screens{
  name:string;
  url:string;
  icon:string;

}





