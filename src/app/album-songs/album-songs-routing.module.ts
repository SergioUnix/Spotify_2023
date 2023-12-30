import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumSongsPage } from './album-songs.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumSongsPageRoutingModule {}
