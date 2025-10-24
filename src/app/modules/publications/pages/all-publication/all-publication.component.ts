// all-publication.component.ts
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ALQUILERES_INICIALES } from 'src/app/listado/alquileres.json';

@Component({
  selector: 'app-all-publication',
  templateUrl: './all-publication.component.html',
  styleUrls: ['./all-publication.component.css']
})
export class AllPublicationComponent {
  ciudad: string = '';
  tipo: string = '';
  publicaciones: any[] = [];
  ciudadMapa: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.ciudad = params['ciudad'] || '';
      this.tipo = params['tipo']?.toLowerCase() || '';
      this.filtrarPublicaciones();
    });
  }

  filtrarPublicaciones(): void {
    const ciudadData = ALQUILERES_INICIALES.find(
      c => c.ciudad.toLowerCase() === this.ciudad.toLowerCase()
    );

    if (ciudadData) {
      this.publicaciones = ciudadData.opciones.filter(op =>
        op.titulo.toLowerCase().includes(this.tipo)
      );
      this.ciudadMapa = this.sanitizer.bypassSecurityTrustResourceUrl(ciudadData.maps);
    } else {
      this.publicaciones = [];
      this.ciudadMapa = '';
    }
  }
}