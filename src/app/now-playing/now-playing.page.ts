import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage implements OnInit {
  audio = new Audio ();
  public v_play: boolean = true;
  public v_pause: boolean = false;

  accion1(){
    this.v_play = !this.v_play;
    }
   
    accion2(){
    this.v_pause = !this.v_pause;
    }
   
     constructor(public modalCtrl: ModalController) { 
       this.audio.src = ' ../../../assets/audio/Musica Del Cielo.mp3';
       this.audio.load ();
   
     }
   
     play () {
       this.audio.play ();
       this.accion1();
       this.accion2();
     }
   
     pause ( ) {
       this.audio.pause ();
       this.accion1();
       this.accion2();
     }
   
     ngOnInit() {
     }
   
     closeModal() {
       this.modalCtrl.dismiss();
     }
   
   }
   