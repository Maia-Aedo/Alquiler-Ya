import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';

// VISTAS
import { RegistroComponent } from './page/registro/registro.component';
import { InicioSesionComponent } from './page/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ],
  exports: [
    RegistroComponent,
    InicioSesionComponent
  ]
})
export class AutentificacionModule { }
