import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchYearsComponent } from './match-years/match-years.component';
import { StatisticTeamComponent } from './statistic-team/statistic-team.component';

import { StatisticMatchPage } from './statistics/statistic-match.page';

const routes: Routes = [
  {
    path: '',
    component: StatisticMatchPage
  },
  {
    path: 'years',
    component: MatchYearsComponent
  },
  {
    path: 'team',
    component: StatisticTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticMatchPageRoutingModule { }
