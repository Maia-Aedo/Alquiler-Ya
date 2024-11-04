import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AutenticacionModule { }
