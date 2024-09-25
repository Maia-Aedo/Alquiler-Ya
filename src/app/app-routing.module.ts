import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

/*  
  La carga perezosa se encarga de renderizar un módulo (contenedor de componentes); sólo cargara el contenido 
  que contenga (componentes, servicios, entre otros).
  - Facilita la comunicación entre módulos para utilizar sus componentes
  - Facilita el manejo y encapsulación de errores entre módulos
  - Contribuye a una renderización más rápida en la aplicación
*/

const routes: Routes = [
  {
    path: "", component: InicioComponent
  },
  {
    path: "", loadChildren: ()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path: "", loadChildren: ()=>import('./modules/publicacion/publicacion.module').then(m=>m.PublicacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
