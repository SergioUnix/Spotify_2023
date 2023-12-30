import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';  //necesario para lanzar mis datos por medio de [NGModel]
import {HttpClientModule} from '@angular/common/http';//tambien se necesita importa HttpClientModule

import { CommonModule } from '@angular/common'; 


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,         //escribo aca el httpClientModule
  FormsModule,             //necesario ponerlo para enlazar datos con el objeto creado tipo interfaz
  ReactiveFormsModule,      /// en necesario para manejar las validaciones de formularios FormBuilder
 
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


