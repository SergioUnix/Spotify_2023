import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MusicPlayerService } from '../music-player.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private musicPlayerService: MusicPlayerService
  ) {}

  play() {
    this.musicPlayerService.play();
  }

  pause() {
    this.musicPlayerService.pause();
  }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
