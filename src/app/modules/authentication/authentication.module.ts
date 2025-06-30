import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ApiService } from 'src/app/services/api.service';

/**
 * Módulo que encapsula la lógica y las vistas relacionadas con la autenticación de usuarios,
 * incluyendo login y registro.
 *
 * Declara y exporta los componentes asociados, e importa módulos necesarios para formularios,
 * comunicación HTTP, estilos Clarity y enrutamiento.
 *
 * @export
 * @class AuthenticationModule
 */
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  /**
   * Proveedores de servicios necesarios, como la comunicación con la API.
   */
  providers: [
    ApiService
  ]
})
export class AuthenticationModule { }
