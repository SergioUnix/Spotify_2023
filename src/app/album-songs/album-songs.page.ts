import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MusicPlayerService } from '../music-player.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-songs',
  templateUrl: './album-songs.page.html',
  styleUrls: ['./album-songs.page.scss'],
})
export class AlbumSongsPage implements OnInit {

  albumTitle: string;
  albumImageUrl: string = 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg';
  //songs: { title: string; artist: string ; img: string}[];
 songs=[];

  constructor(private route: ActivatedRoute, private alertController: AlertController,
    private musicPlayerService: MusicPlayerService,private http: HttpClient) { }


  ngOnInit() {
    
    this.route.params.subscribe(params => {
        // 'id' debe coincidir con el nombre del parámetro en tu ruta
        const albumId = params['id'];
    
        // Ahora puedes usar albumId como desees en tu componente
        //console.log('Album ID:', albumId);

        this.fetchSongs(albumId);
      });

    
  }

  fetchSongs(albumID) {
    // Obtén la URL del endPoint desde la variable de entorno
    const apiUrl = `http://localhost:3000/api/all/albums/song/`+albumID;

    // Realiza la solicitud HTTP
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        // Asigna los datos recibidos al arreglo Albums
        this.songs = response;
        //console.log(this.songs);
      },
      (error) => {
        console.error('Error al obtener datos de la API', error);
      }
    );
  }
  
  onSongClick(song: any) {
    // Agrega aquí la lógica que deseas ejecutar al hacer clic en el nombre de la canción  
    this.musicPlayerService.cambiarAlbum_Lista(this.songs,song.CancionID);
  
  }

  async showOptions(song: any) {
    const alert = await this.alertController.create({
      header: 'Opciones de canción',
      message: `Opciones para "${song.TituloCancion}" de ${song.NombreArtista}`,
      buttons: ['Cerrar'],
    });

    await alert.present();
  }
}




