import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

// FIREBASE -> importamos HERRAMIENTAS de la Base de Datos
import { environment } from '../enviroments/enviroments'; // vincula a la BD con la APP
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // trabaja con imágenes y archivos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Módulo raíz de la aplicación Angular.
 * 
 * Este módulo inicializa:
 * - El componente principal (`AppComponent`)
 * - El enrutamiento global (`AppRoutingModule`)
 * - Animaciones de Angular
 * - Módulo compartido con componentes globales (`SharedModule`)
 * - Configuración e integración con Firebase: autenticación, almacenamiento y base de datos
 *
 * @export
 * @class AppModule
 */
@NgModule({
  /**
   * Componentes declarados en este módulo.
   */
  declarations: [
    AppComponent
  ],

  /**
   * Módulos importados necesarios para la aplicación.
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Módulo con componentes reutilizables a lo largo de la aplicación
    SharedModule,

    // Inicialización de Firebase con configuración personalizada
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],

  /**
   * Proveedores de servicios globales. Actualmente vacío.
   */
  providers: [],

  /**
   * Componente que se inicializa al arrancar la aplicación.
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
