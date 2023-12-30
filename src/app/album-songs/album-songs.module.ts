import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumSongsPageRoutingModule } from './album-songs-routing.module';

import { AlbumSongsPage } from './album-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumSongsPageRoutingModule
  ],
  declarations: [AlbumSongsPage]
})
export class AlbumSongsPageModule {}
