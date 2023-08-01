import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { FavoritosService } from '../favoritos.service';



@NgModule({
  declarations: [
    FavoritosComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    FavoritosService
  ]
})
export class FavoritosModule { }
