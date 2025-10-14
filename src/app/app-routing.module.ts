import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './modules/authentication/pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { PruebaComponent } from './test/prueba/prueba.component';

/**
 * Rutas principales de la aplicación.
 *
 * Se utiliza carga perezosa (`lazy loading`) para módulos como `home`, `post`, `about` y `authentication`,
 * permitiendo que se carguen únicamente cuando el usuario navega hacia ellos.
 * 
 * @constant
 */
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'prueba', component: PruebaComponent
  },
  {
    path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'publicacion', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule),
    canActivate: [authGuard]
  },
  {
    path: 'login', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'publications', loadChildren: () => import('./modules/publications/publications.module').then((m) => m.PublicationsModule),
    canActivate: [authGuard],
  }

];

/**
 * Módulo de enrutamiento principal de la aplicación.
 * Se encarga de cargar módulos de forma perezosa y gestionar la navegación global.
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
