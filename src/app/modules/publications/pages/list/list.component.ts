import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Publicacion {
  id: number;
  titulo: string;
  ubicacion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  publicaciones: Publicacion[] = []; // lista vacía por ahora

  constructor(private router: Router) {}

  goToNew(): void {
    // Más adelante redirigirá al formulario de carga
    this.router.navigate(['/publications/new']);
  }
}
