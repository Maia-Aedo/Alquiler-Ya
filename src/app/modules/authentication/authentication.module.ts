import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { ClarityModule } from '@clr/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule 
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class AuthenticationModule { }
