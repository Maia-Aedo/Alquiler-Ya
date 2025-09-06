import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { authGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: "post", component: PostComponent,
    canActivate: [authGuard]
  },
  {
    path: "favourite", component: FavouriteComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
