// list-publications.component.ts
import { Component } from '@angular/core';
import { ALQUILERES_INICIALES } from 'src/app/listado/alquileres.json';

@Component({
  selector: 'app-list-publications',
  templateUrl: './list-publications.component.html',
  styleUrls: ['./list-publications.component.css']
})
export class ListPublicationsComponent {
  publicaciones: any[] = [];

  ngOnInit(): void {
    const tipos = ['departamento', 'casa', 'cabaña'];

    for (const ciudad of ALQUILERES_INICIALES) {
      const filtrados = ciudad.opciones.filter(op =>
        tipos.some(tipo => op.titulo.toLowerCase().includes(tipo))
      );
      this.publicaciones.push(...filtrados);
    }
  }
}
