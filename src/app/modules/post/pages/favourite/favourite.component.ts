import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  favoritos: any[] = [];  // Aquí se guardarán los datos de los favoritos

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías cargar los favoritos desde un servicio o localStorage, por ejemplo.
    this.favoritos = [
      {
        id: '1',
        name: 'Apartamento en la playa',
        price: 150,
        location: 'Santa Marta, Colombia',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: '2',
        name: 'Casa en la montaña',
        price: 250,
        location: 'Bogotá, Colombia',
        image: 'https://via.placeholder.com/150'
      }
    ];
  }

  eliminarFavorito(id: string): void {
    // Aquí puedes implementar la lógica para eliminar un favorito
    this.favoritos = this.favoritos.filter(favorito => favorito.id !== id);
  }
}
