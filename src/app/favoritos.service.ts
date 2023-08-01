import { Injectable } from '@angular/core';

export interface Favorito {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  public favoritos: Favorito[] = [];

  agregarFavorito(item: Favorito) {
    console.log('Entra aqui');
    const existeElemento = this.favoritos.some(
      (favorito) => favorito.id === item.id
    );
    if (!existeElemento) {
      this.favoritos.push(item);
      window.alert('¡Item agregado a Favoritos!');
    } else {
      window.alert('Este item ya está en la lista de Favoritos.');
    }

    console.log('listado', this.favoritos);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  obtenerFavoritos() {
    console.log('Entra en obtener');
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      this.favoritos = JSON.parse(favoritosGuardados) as Favorito[]; // Convertir a arreglo de objetos
    }
    return this.favoritos;
  }

  eliminarFavorito(itemId: number) {
    const index = this.favoritos.findIndex(
      (favorito) => favorito.id === itemId
    );
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      this.obtenerFavoritos();
    }
  }
}
