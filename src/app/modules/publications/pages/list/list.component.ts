import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ALQUILERES_INICIALES } from 'src/app/listado/alquileres.json';

// Definición de las interfaces para que coincidan con la estructura del JSON
interface UbicacionDetalle {
  latitud: number;
  longitud: number;
  direccion: string;
}

interface Opinion {
  usuario: string;
  comentario: string;
  puntuacion: number;
}

interface Publicacion {
  // Campos utilizados en el listado y el formulario
  id: number;
  titulo: string;
  lugar: string; // Este es el string que usas para la ubicación en la tarjeta
  precio: number;
  imagen: string;

  // Campos complejos del JSON que causaban el error
  cantidad_habitaciones: number;
  wifi: boolean;
  valoracion: number;
  cantidad_calificaciones: number;
  descripcion: string;
  normas: string[];
  propietario: string;
  descripcion_propietario: string;
  opiniones_publicas: Opinion[];
  zona: string;
  disponible: boolean;
  amueblado: boolean;
  ubicacion: UbicacionDetalle; // Este campo era el principal conflicto
  metros_cuadrados: number;
  servicios: string[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  publicaciones: Publicacion[] = [];

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.loadPublications();
  }

  loadPublications(): void {
    const storedPublications = window.localStorage.getItem('publicaciones');
    
    if (storedPublications) {
      // Cargamos lo que el usuario guardó (incluyendo los iniciales si ya se guardaron)
      this.publicaciones = JSON.parse(storedPublications);
    } else {
      // Primera carga: usamos el JSON inicial
      this.publicaciones = ALQUILERES_INICIALES as Publicacion[];
      // Guardamos la lista inicial en localStorage para futuras cargas
      window.localStorage.setItem('publicaciones', JSON.stringify(ALQUILERES_INICIALES));
    }
  }

   openMap(publicacion: Publicacion): void {
    const lat = publicacion.ubicacion.latitud;
    const lng = publicacion.ubicacion.longitud;

    // 1. Usamos el formato de URL de Google Maps para buscar por coordenadas
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

    // 2. Abrir la URL en una nueva pestaña del navegador
    window.open(mapUrl, '_blank');
  }

  goToNew(): void {
    this.router.navigate(['/publications/new']);
  }
}