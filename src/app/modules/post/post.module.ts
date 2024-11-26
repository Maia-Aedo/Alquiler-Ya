import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './pages/post/post.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';


@NgModule({
  declarations: [
    PostComponent,
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
