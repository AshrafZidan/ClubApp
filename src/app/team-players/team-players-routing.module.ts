import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiggestPlayersComponent } from './biggest-players/biggest-players.component';
import { CotachDetailsComponent } from './cotach-details/cotach-details.component';
import { CurrentPlayersComponent } from './current-players/current-players.component';
import { FirstTeamComponent } from './first-team/first-team.component';
import { ForeignPlayersDetialsComponent } from './foreign-players-detials/foreign-players-detials.component';
import { ForeignPlayersComponent } from './foreign-players/foreign-players.component';
import { ListScorersAttackDetialsComponent } from './list-scorers-attack-detials/list-scorers-attack-detials.component';
import { ListScorersCompetingDetialsComponent } from './list-scorers-competing-detials/list-scorers-competing-detials.component';
import { ListScorersCompetingTeamsComponent } from './list-scorers-competing-teams/list-scorers-competing-teams.component';
import { ListScorersReversDetialsComponent } from './list-scorers-revers-detials/list-scorers-revers-detials.component';
import { ListScorersReverseComponent } from './list-scorers-reverse/list-scorers-reverse.component';
import { ListScorersComponent } from './list-scorers/list-scorers.component';
import { LocalPlayersComponent } from './local-players/local-players.component';
import { RetiredPlayersComponent } from './retired-players/retired-players.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { TeamInformationsComponent } from './team-informations/team-informations.component';
import { TeamPlayersDetialsComponent } from './team-players-detials/team-players-detials.component';

import { TeamPlayersComponent } from './team-players/team-players.component';
import { YoungestPlayersComponent } from './youngest-players/youngest-players.component';

const routes: Routes = [
  {
    path: '',
    component: TeamPlayersComponent
  },
  {
    path: 'teamplayers-detials',
    component: TeamPlayersDetialsComponent
  },
  {
    path: 'team-info',
    component: TeamInformationsComponent
  }
  ,
  {
    path: 'first-team',
    component: FirstTeamComponent
  },
  {
    path: 'select-team',
    component: SelectTeamComponent
  },
  {
    path: 'list-scorers',
    component: ListScorersComponent
  },
  {
    path: 'list-scorers-revers',
    component: ListScorersReverseComponent
  },
  {
    path: 'list-scorers-competing',
    component: ListScorersCompetingTeamsComponent
  },
  {
    path: 'foreign-team',
    component: ForeignPlayersComponent
  },
  {
    path: 'local-team',
    component: LocalPlayersComponent
  },
  {
    path: 'current-team',
    component: CurrentPlayersComponent
  },
  {
    path: 'retired-team',
    component: RetiredPlayersComponent
  },
  {
    path: 'young-team',
    component: YoungestPlayersComponent
  },
  {
    path: 'big-team',
    component: BiggestPlayersComponent
  },
  {
    path: 'cotach-details',
    component: CotachDetailsComponent
  },
  {
    path: 'attacker-details',
    component: ListScorersAttackDetialsComponent
  },
  {
    path: 'revers-details',
    component: ListScorersReversDetialsComponent
  },
  {
    path: 'competing-details',
    component: ListScorersCompetingDetialsComponent
  },
  {
    path: 'forgin-details',
    component: ForeignPlayersDetialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPlayersPageRoutingModule { }
