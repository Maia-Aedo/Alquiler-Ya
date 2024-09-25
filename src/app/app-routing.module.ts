import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: "", component: InicioComponent
  },
  // carga perezosa | lazy loading
  {
    path: "", loadChildren: ()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path: "", loadChildren: ()=>import('./modules/publicaciones/publicaciones.module').then(m=>m.PublicacionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*  
  la carga perezosa se encarga de renderizar un modulo(contenedor de components), únicamente cargan el
  content de su módulo
  esto facilita la comunicación entre modulos para utilizar sus componentes y evitar cargas muy largas en la app
*/
