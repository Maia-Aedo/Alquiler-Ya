import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicationComponent } from './pages/publication/publication.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

const routes: Routes = [
  {
    path: "publication", component: PublicationComponent
  },
  {
    path: "favorite", component: FavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
