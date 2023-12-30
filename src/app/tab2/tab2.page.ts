import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // Asegúrate de ajustar la ruta correcta

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  

  constructor(private http: HttpClient,private router: Router) {}


  Albums = [];
  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    // Obtén la URL del endPoint desde la variable de entorno
    const apiUrl = `${environment.apiUrl}/all/albums`;

    // Realiza la solicitud HTTP
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        // Asigna los datos recibidos al arreglo Albums
        this.Albums = response;
        console.log(this.Albums);
      },
      (error) => {
        console.error('Error al obtener datos de la API', error);
      }
    );
  }



  redirectToAlbumDetail(albumId: number) {
    console.log(albumId);
    this.router.navigate(['/tabs/album', albumId]);
    // Reemplaza '/ruta-de-destino' con la ruta real de la página a la que deseas redirigir.
  }
  




}











