import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALQUILERES_INICIALES } from 'src/app/listado/alquileres.json';

@Component({
  selector: 'app-view-publication',
  templateUrl: './view-publication.component.html',
  styleUrls: ['./view-publication.component.css']
})
export class ViewPublicationComponent {
  publicacion: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      for (const ciudad of ALQUILERES_INICIALES) {
        const encontrada = ciudad.opciones.find(op => op.id === id);
        if (encontrada) {
          this.publicacion = encontrada;
          break;
        }
      }
    });
  }
}
