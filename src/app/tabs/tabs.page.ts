import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NowPlayingPage } from '../now-playing/now-playing.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalCtrl: ModalController,private router: Router) {}

 // async openNowPlaying() {
   // const modal = await this.modalCtrl.create({
    //  component: NowPlayingPage
    //});
    //return await modal.present();
 // }

 openNowPlaying() {
  this.router.navigate(['/now-playing']); 

 }



}
