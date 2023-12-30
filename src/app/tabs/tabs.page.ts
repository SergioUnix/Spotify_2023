import { Component ,NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NowPlayingPage } from '../now-playing/now-playing.page';
import { Router } from '@angular/router';
import { MusicPlayerService } from '../music-player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  imagenAlbum: string;
  artista: string;
  album: string;
  tituloCancion: string;  
  tiempoActual: number;
  duracionTotal: number;
  isPlay: boolean;

  private tiempoAntesDeTerminar: number = 10; // ajusta según tus necesidades, en segundos

  

  private imagenAlbumSubscription: Subscription;
  private artistaSubscription: Subscription;
  private albumSubscription: Subscription;
  private tituloCancionSubscription: Subscription;

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    private musicPlayerService: MusicPlayerService,
    private zone: NgZone
  ) {
    // Suscribirse a los Observables
    this.imagenAlbumSubscription = this.musicPlayerService.imagenAlbum$.subscribe(imagenAlbum => {
      this.zone.run(() => {
        this.imagenAlbum = imagenAlbum;
      });
    });

    this.artistaSubscription = this.musicPlayerService.artista$.subscribe(artista => {
      this.zone.run(() => {
        this.artista = artista;
      });
    });

    this.albumSubscription = this.musicPlayerService.album$.subscribe(album => {
      this.zone.run(() => {
        this.album = album;
      });
    });

    this.tituloCancionSubscription = this.musicPlayerService.tituloCancion$.subscribe(tituloCancion => {
      this.zone.run(() => {
        this.tituloCancion = tituloCancion;
      });
    });
  }

  ngOnDestroy() {
    // Desuscribirse para evitar pérdidas de memoria
    this.imagenAlbumSubscription.unsubscribe();
    this.artistaSubscription.unsubscribe();
    this.albumSubscription.unsubscribe();
    this.tituloCancionSubscription.unsubscribe();
  }


  

  ngOnInit() { 
    this.tituloCancion=this.musicPlayerService.tituloCancion;
    this.album=this.musicPlayerService.album;
    this.artista=this.musicPlayerService.artista;
    this.imagenAlbum=this.musicPlayerService.imagenAlbum;

     // ... otras inicializaciones
  this.musicPlayerService.duracionCancion$.subscribe(duracion => {
    this.duracionTotal = duracion;
  });

    // Actualizar el tiempo actual cada segundo
    setInterval(() => {
      this.tiempoActual = this.musicPlayerService.obtenerTiempoActual();
   
      this.isPlay = this.musicPlayerService.isAudioPlaying();    

            // Calcular tiempo restante de la cancion que se esta reproduciendo
            const tiempoRestante = this.duracionTotal - this.tiempoActual;

            //const minutos = Math.floor(tiempoRestante / 60);
            //const segundos = Math.floor(tiempoRestante % 60);
            //console.log(`Tiempo restante: ${minutos}:${segundos}`);     

            // Imprimir mensaje si es el momento adecuado
            if (tiempoRestante <= this.tiempoAntesDeTerminar && tiempoRestante > 0) {
              console.log("Ya va a terminar");
              this.musicPlayerService.obtenerSiguienteID_play();
            }
   
    }, 200);
}


 openNowPlaying() {
  this.router.navigate(['/now-playing']); 

 }

 play() {
  this.musicPlayerService.play();


}

pause(){
  this.musicPlayerService.pause();
}



  // Este método podría ser llamado después de algún evento asincrónico
//  actualizarInfo(albumNuevo: string, tituloNuevo: string) {
    // Realiza la actualización dentro de la zona de Angular
  //  this.zone.run(() => {
  //    this.album = albumNuevo;
  //    this.tituloCancion = tituloNuevo;
  //  });
 // }


 

}









