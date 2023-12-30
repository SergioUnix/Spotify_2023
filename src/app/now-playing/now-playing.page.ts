import { Component, OnInit ,NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MusicPlayerService } from '../music-player.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage implements OnInit {


  imagenAlbum: string;
  artista: string;
  album: string;
  tituloCancion: string;  
  tiempoActual: number;
  duracionTotal: number;
  isPlay: boolean;

  aleatorio:boolean;
  reproducirSoloUnaVez:boolean;
  reproducirTodaLista:boolean;
  

  private imagenAlbumSubscription: Subscription;
  private artistaSubscription: Subscription;
  private albumSubscription: Subscription;
  private tituloCancionSubscription: Subscription;
  private aleatorioSubscription: Subscription;
  private reproducirSoloUnaVezSubscription: Subscription;
  private reproducirTodaListaSubscription: Subscription;

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    private musicPlayerService: MusicPlayerService,
    private zone: NgZone
  ) { // Suscribirse a los Observables
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

    this.aleatorioSubscription = this.musicPlayerService.aleatorio$.subscribe(aleatorio => {
      this.zone.run(() => {
        this.aleatorio= aleatorio;
      });
    });

    this.reproducirSoloUnaVezSubscription = this.musicPlayerService.reproducirSoloUnaVez$.subscribe(reproducirSoloUnaVez => {
      this.zone.run(() => {
        this.reproducirSoloUnaVez = reproducirSoloUnaVez;
      });
    });

    this.reproducirTodaListaSubscription = this.musicPlayerService.reproducirTodaLista$.subscribe(reproducirTodaLista => {
      this.zone.run(() => {
        this.reproducirTodaLista = reproducirTodaLista;
      });
    });


  
  }



  ngOnInit() { 
    this.imagenAlbum= 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg';
    this.artista= 'Funky';
    this.album=  'Indestructible'; 
    this.tituloCancion='Es Imposible';

     // ... otras inicializaciones
  this.musicPlayerService.duracionCancion$.subscribe(duracion => {
    this.duracionTotal = duracion;
  });

  this.musicPlayerService.reproducirSoloUnaVez$.subscribe(duracion => {
    this.reproducirSoloUnaVez = duracion;
  });
  this.musicPlayerService.aleatorio$.subscribe(duracion => {
    this.aleatorio = duracion;
  });
  this.musicPlayerService.reproducirTodaLista$.subscribe(duracion => {
    this.reproducirTodaLista = duracion;
  });


    // Actualizar el tiempo actual cada segundo
    setInterval(() => {
      this.tiempoActual = this.musicPlayerService.obtenerTiempoActual();
      // En tu constructor o en algún otro lugar donde sea relevante
     
      this.isPlay = this.musicPlayerService.isAudioPlaying();
      
      this.tituloCancion=this.musicPlayerService.tituloCancion;
      this.album=this.musicPlayerService.album;
      this.artista=this.musicPlayerService.artista;
      this.imagenAlbum=this.musicPlayerService.imagenAlbum;

      //verificar siempre que esten las de repetir
      this.aleatorio=this.musicPlayerService.aleatorio;
      this.reproducirSoloUnaVez=this.musicPlayerService.reproducirSoloUnaVez;
      this.reproducirTodaLista =this.musicPlayerService.reproducirTodaLista;

      console.log('Valores: Aleatorio:', this.aleatorio, 'ReproducirSoloUnaVez:', this.reproducirSoloUnaVez, 'ReproducirTodaLista:', this.reproducirTodaLista);


    }, 800);
}




  
  play() {
    this.musicPlayerService.play();
  }

  pause() {
    this.musicPlayerService.pause();
  }

siguiente(){
  if (this.musicPlayerService.arregloEnReproduccion && this.musicPlayerService.arregloEnReproduccion.length > 0) {
    this.musicPlayerService.siguienteCancion();
    
  } else {
    console.log('El arreglo está vacío.');
    this.musicPlayerService.repetirCancion();
  }
  

  
}
 
anterior(){
  if (this.musicPlayerService.arregloEnReproduccion && this.musicPlayerService.arregloEnReproduccion.length > 0) {
    this.musicPlayerService.anteriorCancion();
    
  } else {
    console.log('El arreglo está vacío.');
    this.musicPlayerService.repetirCancion();
  }
}

  closeModal() {
    this.modalCtrl.dismiss();
  }



////// Estos tres metodos son para mostrar los numeros de avance y los restantes
  calcularTiempoFormateado(tiempo: number): string {
    const minutos = Math.floor(tiempo / 60);
    const segundos = Math.floor(tiempo % 60);
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }

  obtenerTiempoActualFormateado(): string {
    return this.calcularTiempoFormateado(this.tiempoActual);
  }

  obtenerTiempoRestanteFormateado(): string {
    return this.calcularTiempoFormateado(this.duracionTotal - this.tiempoActual);
  }


  cambiarVariables(boton: number) {
    console.log("boton presionado");
    console.log(boton);
    if (boton === 1) { //aca esta en toda la lista
      this.musicPlayerService.reproducirSoloUnaVez =true;
      this.musicPlayerService.aleatorio = false;
      this.musicPlayerService.reproducirTodaLista = false;
    } else if (boton === 2) { //reproduce infinitamente 1 cancion
      this.musicPlayerService.aleatorio =true;
      this.musicPlayerService.reproducirSoloUnaVez = false;      
      this.musicPlayerService.reproducirTodaLista = false;
    } else if (boton === 3) {//aca esta en estado aleatorio
      this.musicPlayerService.reproducirTodaLista = true;
      this.musicPlayerService.reproducirSoloUnaVez = false;
      this.musicPlayerService.aleatorio = false;

    }

   

  }


}













