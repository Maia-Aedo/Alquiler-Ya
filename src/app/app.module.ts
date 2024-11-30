// Librerias globales
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared: Contiene contenido global
import { SharedModule } from './modules/shared/shared.module';
// Favoritos: Contiene sección de favoritos.
import { FavoritosModule } from './modules/favoritos/favoritos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FavoritosModule  // Importamos FavoritosModule aquí para usar ListaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
