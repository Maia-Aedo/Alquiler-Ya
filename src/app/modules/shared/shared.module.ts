import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// componentes locales
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


// metadatos
// caracteristicas que definen el module
@NgModule({
  declarations: [
    // componentes locales
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    // componentes de librerias
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    // para exportar componentes a otros modules
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
