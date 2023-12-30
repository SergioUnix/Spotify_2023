import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MusicPlayerService {
  private audio = new Audio();
  public isPlaying: boolean = false;

  public imagenAlbum = "";
  public artista = "";
  public album = "";
  public tituloCancion = "";
  public duracionCancion: number; // Nueva propiedad para almacenar la duración
  public tiempoActual: number = 0;
  public cancionID:number=0;
  public arregloEnReproduccion = []; ///agrega la lista o album si se da click en una cancion.
  public aleatorio:boolean=false;
  public reproducirSoloUnaVez:boolean =false;
  public reproducirTodaLista:boolean =true;

  private imagenAlbumSubject = new BehaviorSubject<string>('');
  private artistaSubject = new BehaviorSubject<string>('');
  private albumSubject = new BehaviorSubject<string>('');
  private tituloCancionSubject = new BehaviorSubject<string>('');
  private duracionCancionSubject = new BehaviorSubject<number>(0); // Nuevo BehaviorSubject
  private tiempoActualSubject = new BehaviorSubject<number>(0);
  private cancionIDSubject = new BehaviorSubject<number>(0);
  private aleatorioSubject = new BehaviorSubject<boolean>(false);
  private reproducirSoloUnaVezSubject = new BehaviorSubject<boolean>(false);
  private reproducirTodaListaSubject = new BehaviorSubject<boolean>(true);




  imagenAlbum$ = this.imagenAlbumSubject.asObservable();
  artista$ = this.artistaSubject.asObservable();
  album$ = this.albumSubject.asObservable();
  tituloCancion$ = this.tituloCancionSubject.asObservable();
  duracionCancion$ = this.duracionCancionSubject.asObservable(); // Nuevo Observable
  tiempoActual$ = this.tiempoActualSubject.asObservable();
  cancionID$ = this.cancionIDSubject.asObservable();

  aleatorio$ = this.aleatorioSubject.asObservable();
  reproducirSoloUnaVez$ = this.reproducirSoloUnaVezSubject.asObservable();
  reproducirTodaLista$ = this.reproducirTodaListaSubject.asObservable();

  constructor() {
        //this.audio.src = '../../assets/audio/Musica Del Cielo.mp3';
    this.audio.addEventListener('loadedmetadata', () => {
      this.duracionCancion = this.audio.duration;
      this.duracionCancionSubject.next(this.duracionCancion);
    });

    this.audio.addEventListener('timeupdate', () => {
      this.tiempoActual = this.audio.currentTime;
      this.tiempoActualSubject.next(this.tiempoActual);
    });

    // Debes cargar una canción de ejemplo o configurar esta línea según tus necesidades
    this.audio.src = 'https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/01+Funky+%E2%80%94+Es+Imposible.mp3';
    
    this.artista="Funky";
    this.imagenAlbum="https://spotibucket-1990.s3.us-east-2.amazonaws.com/Funky/11-Funky+-+Indestructible+(2015)/Funky-Indestructible.jpeg";
    this.album ="Indestructible";
    this.tituloCancion ="Es Imposible";
    this.audio.load();
  }

  async play() {
    await this.audio.play();
    this.isPlaying = true;
    
  }

  async pause() {
    await this.audio.pause();
    this.isPlaying = false;
  }

  async cambiar(songplay, imagen, artista, album, titulo) {   //este metodo servira para reproducir solamente una cancion , directamente.
    this.audio.src = songplay;
    this.imagenAlbum = imagen;
    this.album = album;
    this.tituloCancion = titulo;
    this.artista = artista;

    // Emitir los nuevos valores
    this.imagenAlbumSubject.next(this.imagenAlbum);
    this.albumSubject.next(this.album);
    this.tituloCancionSubject.next(this.tituloCancion);
    this.artistaSubject.next(this.artista);

    // Emitir la nueva duración de la canción
    this.duracionCancionSubject.next(this.duracionCancion);

    await this.play();
  }





  async cambiarAlbum_Lista(arreglo: any, id_cancion: number) {
    this.arregloEnReproduccion = arreglo;
  
    for (const cancion of this.arregloEnReproduccion) {
      if (cancion.CancionID === id_cancion) {
        this.cancionID = cancion.CancionID;
        this.audio.src = cancion.RutaArchivo;
        this.imagenAlbum = cancion.RutaImagen;
        this.album = cancion.TituloAlbum;
        this.tituloCancion = cancion.TituloCancion;
        this.artista = cancion.NombreArtista;
      }
    }
  
    // Emitir los nuevos valores
    this.imagenAlbumSubject.next(this.imagenAlbum);
    this.albumSubject.next(this.album);
    this.tituloCancionSubject.next(this.tituloCancion);
    this.artistaSubject.next(this.artista);
  
    // Emitir la nueva duración de la canción
    this.duracionCancionSubject.next(this.duracionCancion);
  
    // Asumiendo que `play` es asíncrono, usar await
    await this.play();
  
  }
  






  obtenerTiempoActual(): number {
    return this.tiempoActual;
  }

  
  isAudioPlaying(): boolean {
    return !this.audio.paused;
  }



  async obtenerSiguienteID_play() {
    if(this.reproducirTodaLista){
          const indexActual = this.arregloEnReproduccion.findIndex(c => c.CancionID === this.cancionID);
          if (indexActual !== -1) {
            const siguienteIndex = (indexActual + 1) % this.arregloEnReproduccion.length;
          //reproduce el siguiente
           await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[siguienteIndex].CancionID)
          } else {
            //en caso de que no halla siguiente , manda el primero
           await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[0].CancionID)
          }
    }
    if(this.reproducirSoloUnaVez){
      await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.cancionID)
    }
    if(this.aleatorio){
      const randomIndex = Math.floor(Math.random() * this.arregloEnReproduccion.length);
      await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[randomIndex].CancionID);

    }

  }



///Boton Siguiente

async siguienteCancion(){

  if(!this.aleatorio){
  const indexActual = this.arregloEnReproduccion.findIndex(c => c.CancionID === this.cancionID);
  if (indexActual !== -1) {
    const siguienteIndex = (indexActual + 1) % this.arregloEnReproduccion.length;
  //reproduce el siguiente
    await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[siguienteIndex].CancionID)
  } else {
    //en caso de que no halla siguiente , manda el primero
    await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[0].CancionID)
  }
}else{//si esta activado el aleatorio le doy random
  const randomIndex = await Math.floor(Math.random() * this.arregloEnReproduccion.length);
  await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[randomIndex].CancionID);
}



}



//Boton Anterior
async anteriorCancion(){

  if(!this.aleatorio){
  const indexActual = this.arregloEnReproduccion.findIndex(c => c.CancionID === this.cancionID);
  if (indexActual !== -1) {
    const anteriorIndex = (indexActual - 1 + this.arregloEnReproduccion.length) % this.arregloEnReproduccion.length;
    await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[anteriorIndex].CancionID);
  } else {
    // Si no se encuentra el ID actual, devolver el último ID
    await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[this.arregloEnReproduccion.length - 1].CancionID);
  }
  }else{ //si esta activado el aleatorio le doy ramdom
    const randomIndex = await Math.floor(Math.random() * this.arregloEnReproduccion.length);
    await this.cambiarAlbum_Lista(this.arregloEnReproduccion,this.arregloEnReproduccion[randomIndex].CancionID);
  }

}



repetirCancion(){
  this.audio.load();
  this.play();
}








}




