import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// componente de vista
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
