import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';

// VISTAS -> Seleccionada
import { SeleccionadaComponent } from './pages/seleccionada/seleccionada.component';

// COMPONENTES -> Sección por lugar
import { SeccionComponent } from './components/seccion/seccion.component';


@NgModule({
  declarations: [
    SeleccionadaComponent,
    SeccionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ],
  exports: [
    SeleccionadaComponent,
    SeccionComponent
  ]
})
export class PublicacionesModule { }
