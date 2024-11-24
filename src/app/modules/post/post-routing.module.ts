import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';

const routes: Routes = [
  {
    path: "publication", component: PostComponent
  },
  {
    path: "favorite", component: FavouriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }