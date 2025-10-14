import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// ⚠️ Se eliminaron las importaciones de Angular Material:
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

import { PublicationsRoutingModule } from './publications-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    // ⚠️ Se eliminaron los módulos de Angular Material de aquí:
    // MatButtonModule,
    // MatIconModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    PublicationsRoutingModule,
  ],
})
export class PublicationsModule {}