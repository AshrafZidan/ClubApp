import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { MatchInformationComponent } from './match-information/match-information.component';


const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  },
  {
    path: 'matches-info',
    component: MatchInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesPageRoutingModule { }
