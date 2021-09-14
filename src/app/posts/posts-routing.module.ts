import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfrontationsComponent } from './confrontations/confrontations.component';
import { PostsDetialsComponent } from './posts-detials/posts-detials.component';

import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'posts-detials',
    component: PostsDetialsComponent
  }
  ,
  {
    path: 'Confrontations',
    component: ConfrontationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsPageRoutingModule { }
