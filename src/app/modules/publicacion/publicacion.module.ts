import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RUTA -> Archivo de rutas hijas del módulo
import { PublicacionRoutingModule } from './publicacion-routing.module';

// VISTAS -> Seleccionada
import { SeleccionadaComponent } from './page/seleccionada/seleccionada.component';

// COMPONENTES -> Sección por lugar
import { SeccionComponent } from './component/seccion/seccion.component';

@NgModule({
  declarations: [
    SeleccionadaComponent,
    SeccionComponent
  ],
  imports: [
    CommonModule,
    PublicacionRoutingModule
  ],
  exports: [
    SeleccionadaComponent,
    SeccionComponent
  ]
})
export class PublicacionModule { }
