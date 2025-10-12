import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ciudad: string = '';
  tipoPropiedad: string = '';

  // Permitir solo letras, tildes y espacios
  soloLetras(event: KeyboardEvent): void {
    const char = event.key;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(char)) {
      event.preventDefault();
    }
  }

  // Permitir letras, números y espacios (sin símbolos)
  soloTexto(event: KeyboardEvent): void {
    const char = event.key;
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(char)) {
      event.preventDefault();
    }
  }

  buscar(): void {
    console.log('Buscando en:', this.ciudad, 'Tipo:', this.tipoPropiedad);
    // Aquí luego podés agregar la lógica para filtrar o llamar al backend
  }

}
