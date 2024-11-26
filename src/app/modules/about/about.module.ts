import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

// Vistas
import { AboutComponent } from './pages/about/about.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { TacComponent } from './pages/tac/tac.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AboutComponent,
    FaqsComponent,
    TacComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent,
    FaqsComponent,
    TacComponent,
    ErrorComponent
  ]
})
export class AboutModule { }
