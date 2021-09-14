import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { NewDetailsComponent } from './new-details/new-details.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'news-details',
    component: NewDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule { }
