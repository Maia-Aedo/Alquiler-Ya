// favoritos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [ListaComponent],  // Declarar los componentes de este módulo Aquí defines todos los componentes, directivas y pipes que pertenecen a este módulo. En este caso, estamos declarando ListaComponent.
  imports: [CommonModule],  // Importar CommonModule para usar directivas como ngIf y ngFor  Los módulos que este módulo necesita importar. Como estamos usando directivas como *ngFor, necesitamos importar CommonModule.
  exports: [ListaComponent]  // Exportar el componente para que se pueda usar en otros módulos, Si quieres que el componente ListaComponent sea accesible fuera de este módulo, debes exportarlo aquí. Esto es útil si deseas usarlo en otros componentes, como en el AppComponent o cualquier otro componente en otro módulo.

})
export class FavoritosModule { }
