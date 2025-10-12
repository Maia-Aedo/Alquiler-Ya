import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestModule { }
