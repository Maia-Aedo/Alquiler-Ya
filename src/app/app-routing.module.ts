import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

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
