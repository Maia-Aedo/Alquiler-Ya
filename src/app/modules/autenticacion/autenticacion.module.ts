import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';

import { ClarityModule } from "@clr/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  // Permite uso de elementos personalizados
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutenticacionModule { }
