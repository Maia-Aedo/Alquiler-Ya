import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './modules/authentication/pages/login/login.component';

/*
  La carga perezosa se encarga de renderizar un módulo (contenedor de componentes); sólo cargara el contenido
  que contenga (componentes, servicios, entre otros).
  - Facilita la comunicación entre módulos para utilizar sus componentes
  - Facilita el manejo y encapsulación de errores entre módulos
  - Contribuye a una renderización más rápida en la aplicación
*/

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "", loadChildren: ()=>import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: "", loadChildren: ()=>import('./modules/post/post.module').then(m=>m.PostModule)
  },
  {
    path: "", loadChildren: ()=>import('./modules/authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path: "", loadChildren: ()=>import('./modules/about/about.module').then(m=>m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
