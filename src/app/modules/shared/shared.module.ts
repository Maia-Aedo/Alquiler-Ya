import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes locales compartidos
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Importación del enrutamiento para navegación desde componentes
import { AppRoutingModule } from 'src/app/app-routing.module';

/**
 * Módulo compartido (`SharedModule`) que contiene componentes reutilizables 
 * como la barra de navegación y el pie de página.
 *
 * Este módulo permite que dichos componentes puedan ser utilizados 
 * en cualquier otro módulo de la aplicación mediante su exportación.
 *
 * @export
 * @class SharedModule
 */
@NgModule({
  /**
   * Componentes declarados que pertenecen a este módulo.
   */
  declarations: [
    NavbarComponent,
    FooterComponent
  ],

  /**
   * Módulos requeridos para funcionalidades básicas de Angular y enrutamiento.
   */
  imports: [
    CommonModule,
    AppRoutingModule
  ],

  /**
   * Elementos que se exponen para que otros módulos puedan utilizarlos.
   */
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
