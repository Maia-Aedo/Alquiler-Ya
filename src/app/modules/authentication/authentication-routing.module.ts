import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

/**
 * Conjunto de rutas para el módulo de autenticación.
 * Define las rutas disponibles dentro del módulo, como login y registro.
 *
 * @constant
 */
const routes: Routes = [
  {
    path: '', // Ruta raíz redirige al componente de Login
    component: LoginComponent
  },
  {
    path: 'login', // Ruta explícita para iniciar sesión
    component: LoginComponent
  },
  {
    path: 'register', // Ruta para el registro de nuevos usuarios
    component: RegisterComponent
  }
];

/**
 * Módulo de enrutamiento para el módulo de autenticación.
 * Importa y exporta las rutas específicas de login y registro.
 *
 * @export
 * @class AuthenticationRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
