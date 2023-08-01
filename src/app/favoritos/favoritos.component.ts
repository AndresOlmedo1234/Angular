import { Component, OnInit } from '@angular/core';
import { Favorito, FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {
    this.favoritos =
      this.favoritosService.obtenerFavoritos() as unknown as Favorito[];
  }

  ngOnInit(): void {}

  onEliminarFavorito(item: any) {
    console.log('Entra en el eliminar ',item);
    this.favoritosService.eliminarFavorito(item.id);

    // this.favoritos = this.favoritosService.obtenerFavoritos(); // Actualizar el arreglo después de eliminar
  }
}
