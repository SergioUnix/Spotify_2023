import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerService {
  private audio = new Audio();
  public isPlaying: boolean = false;

  constructor() {
    this.audio.src = '../../assets/audio/Musica Del Cielo.mp3';
    this.audio.load();
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }
}
