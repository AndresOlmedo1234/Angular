import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaService } from '../services/lista.service';
import { Router } from '@angular/router';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  items: any[] = []; // Array para almacenar los datos obtenidos de la API
  favoritos: any[] = []; // Nuevo arreglo para almacenar los items favoritos
  constructor(
    private http: HttpClient,
    private _listaService: ListaService,
    private router: Router,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this._listaService.fetchDataFromApi().subscribe({
      next: (data: any) => {
        // console.log(data);
        this.items = data;
      },
    });
  }

  agregarAFavoritos(item: any) {
    // Agregar el item seleccionado al arreglo de Favoritos
    this.favoritosService.agregarFavorito(item);
    // console.log('Listado', );
  }
}
