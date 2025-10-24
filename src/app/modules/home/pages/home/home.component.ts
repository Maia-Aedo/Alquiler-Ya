import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ALQUILERES_INICIALES } from 'src/app/listado/alquileres.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ciudad: string = '';
  tipoPropiedad: string = '';

  constructor(private router: Router) { }

  alquileres = ALQUILERES_INICIALES;
  alquileresFiltrados = ALQUILERES_INICIALES;

  // Permitir letras, números y espacios (sin símbolos)
  soloTexto(event: KeyboardEvent): void {
    const char = event.key;
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(char)) {
      event.preventDefault();
    }
  }

  buscar(): void {
    const ciudadInput = this.ciudad.trim().toLowerCase();
    const tipoInput = this.tipoPropiedad.trim().toLowerCase();

    // Buscar la ciudad dentro del JSON
    const ciudadCoincidente = ALQUILERES_INICIALES.find(ciudad =>
      ciudad.ciudad.toLowerCase().includes(ciudadInput)
    );

    if (!ciudadCoincidente) {
      console.log('No se encontró la ciudad');
      return;
    }

    // Buscar la propiedad dentro de las opciones de esa ciudad
    const propiedadCoincidente = ciudadCoincidente.opciones.find(opcion =>
      opcion.titulo.toLowerCase().includes(tipoInput)
    );

    if (propiedadCoincidente) {
      // Navegar al componente de publicaciones con parámetros
      this.router.navigate(['/publications/all-publications'], {
        queryParams: {
          ciudad: ciudadCoincidente.ciudad,
          tipo: tipoInput
        }
      });
    } else {
      console.log('No se encontró propiedad en esa ciudad');
    }
  }


  // Permitir solo letras, tildes y espacios
  soloLetras(event: KeyboardEvent): void {
    const char = event.key;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(char)) {
      event.preventDefault();
    }
  }

  limpiar(): void {
    this.ciudad = '';
    this.tipoPropiedad = '';
    this.alquileresFiltrados = this.alquileres;
  }

}
