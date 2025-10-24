// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ALQUILERES_INICIALES } from 'src/app/listado/alquileres.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Inputs del buscador
  ciudad: string = '';
  tipoPropiedad: string = '';

  // Datos base y filtrados
  alquileres = ALQUILERES_INICIALES;
  alquileresFiltrados = ALQUILERES_INICIALES;

  constructor(private router: Router) { }

  // Validación: permite letras, números y espacios (sin símbolos)
  soloTexto(event: KeyboardEvent): void {
    const char = event.key;
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(char)) {
      event.preventDefault();
    }
  }

  // Validación: permite solo letras, tildes y espacios
  soloLetras(event: KeyboardEvent): void {
    const char = event.key;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(char)) {
      event.preventDefault();
    }
  }

  // Acción principal: buscar ciudad y tipo de propiedad en el JSON
  buscar(): void {
    const ciudadInput = this.ciudad.trim().toLowerCase();
    const tipoInput = this.tipoPropiedad.trim().toLowerCase();

    // Buscar ciudad coincidente
    const ciudadCoincidente = this.alquileres.find(item =>
      item.ciudad.toLowerCase().includes(ciudadInput)
    );

    if (!ciudadCoincidente) {
      console.log('No se encontró la ciudad');
      return;
    }

    // Buscar propiedad dentro de esa ciudad
    const propiedadCoincidente = ciudadCoincidente.opciones.find(opcion =>
      opcion.titulo.toLowerCase().includes(tipoInput)
    );

    if (propiedadCoincidente) {
      // Redirigir con parámetros de búsqueda
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

  // Restablecer campos y resultados
  limpiar(): void {
    this.ciudad = '';
    this.tipoPropiedad = '';
    this.alquileresFiltrados = this.alquileres;
  }

  // Sugerencias dinámicas para autocompletar
  ciudadesFiltradas: string[] = [];
  tiposFiltrados: string[] = [];

  // Listas base de sugerencias
  sugerenciasCiudad: string[] = ['Cipolletti', 'Las Grutas', 'Mar del Plata'];
  sugerenciasTipo: string[] = ['Casa', 'Departamento', 'Cabaña'];

  // Filtrar sugerencias de ciudad según input
  filtrarCiudades(): void {
    const texto = this.ciudad?.toLowerCase() || '';
    this.ciudadesFiltradas = this.sugerenciasCiudad
      .filter(c => c.toLowerCase().includes(texto))
      .slice(0, 3); // Limitar a 3 resultados
  }

  // Filtrar sugerencias de tipo de propiedad según input
  filtrarTipos(): void {
    const texto = this.tipoPropiedad?.toLowerCase() || '';
    this.tiposFiltrados = this.sugerenciasTipo
      .filter(t => t.toLowerCase().includes(texto))
      .slice(0, 3); // Limitar a 3 resultados
  }

  // Ocultar sugerencias (al hacer clic fuera o presionar Enter)
  cerrarSugerencias(): void {
    this.ciudadesFiltradas = [];
    this.tiposFiltrados = [];
  }
}
