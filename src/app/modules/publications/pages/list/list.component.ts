import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ALQUILERES_INICIALES } from 'src/app/listado/alquileres.json';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  publicaciones: Publicacion[] = [];

  constructor(private router: Router) { }


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
      // this.publicaciones = ALQUILERES_INICIALES as Publicacion[];
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