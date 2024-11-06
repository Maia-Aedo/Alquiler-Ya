import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';

import { PublicationComponent } from './pages/publication/publication.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

@NgModule({
  declarations: [
    PublicationComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    PublicationRoutingModule
  ],
  exports: [
    PublicationComponent,
    FavoriteComponent
  ]
})
export class PublicationModule { }
