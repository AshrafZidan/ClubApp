import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LanguageComponent } from './language/language.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'medialibrary',
    loadChildren: () => import('./medialibrary/medialibrary.module').then(m => m.MedialibraryPageModule)
  },
  {
    path: 'photogallery',
    loadChildren: () => import('./photogallery/photogallery.module').then(m => m.PhotogalleryPageModule)
  },
  {
    path: 'team-players',
    loadChildren: () => import('./team-players/team-players.module').then(m => m.TeamPlayersPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsPageModule)
  },
  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'language',
    component: LanguageComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'matches',
    loadChildren: () => import('./matches/matches.module').then(m => m.MatchesPageModule)
  },
  {
    path: 'statistic-match',
    loadChildren: () => import('./statistic-match/statistic-match.module').then(m => m.StatisticMatchPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
