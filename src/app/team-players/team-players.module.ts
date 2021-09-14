import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamPlayersPageRoutingModule } from './team-players-routing.module';

import { TeamPlayersComponent } from './team-players/team-players.component';
import { TeamPlayersDetialsComponent } from './team-players-detials/team-players-detials.component';
import { TeamInformationsComponent } from './team-informations/team-informations.component';
import { FirstTeamComponent } from './first-team/first-team.component';
import { SharedModule } from '../shared/shared.module';
import { SelectTeamComponent } from './select-team/select-team.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { PopupModalSearchComponent } from './popup-modal-search/popup-modal-search.component';
import { ListScorersComponent } from './list-scorers/list-scorers.component';
import { ListScorersCompetingTeamsComponent } from './list-scorers-competing-teams/list-scorers-competing-teams.component';
import { ListScorersReverseComponent } from './list-scorers-reverse/list-scorers-reverse.component';
import { ForeignPlayersComponent } from './foreign-players/foreign-players.component';
import { LocalPlayersComponent } from './local-players/local-players.component';
import { CurrentPlayersComponent } from './current-players/current-players.component';
import { RetiredPlayersComponent } from './retired-players/retired-players.component';
import { YoungestPlayersComponent } from './youngest-players/youngest-players.component';
import { BiggestPlayersComponent } from './biggest-players/biggest-players.component';
import { CotachDetailsComponent } from './cotach-details/cotach-details.component';
import { ListScorersAttackDetialsComponent } from './list-scorers-attack-detials/list-scorers-attack-detials.component';
import { ListScorersReversDetialsComponent } from './list-scorers-revers-detials/list-scorers-revers-detials.component';
import { ListScorersCompetingDetialsComponent } from './list-scorers-competing-detials/list-scorers-competing-detials.component';
import { ForeignPlayersDetialsComponent } from './foreign-players-detials/foreign-players-detials.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPlayersPageRoutingModule,
    SharedModule
  ],
  declarations: [
    TeamPlayersComponent, SelectTeamComponent,
    TeamPlayersDetialsComponent, TeamInformationsComponent,
    FirstTeamComponent, PopupModalComponent, PopupModalSearchComponent,
    ListScorersComponent, ListScorersCompetingTeamsComponent, ListScorersReverseComponent,
    ForeignPlayersComponent, LocalPlayersComponent, CurrentPlayersComponent,
    RetiredPlayersComponent, YoungestPlayersComponent, BiggestPlayersComponent,
    CotachDetailsComponent, ListScorersAttackDetialsComponent, ListScorersReversDetialsComponent,
    ListScorersCompetingDetialsComponent, ForeignPlayersDetialsComponent
  ]
})
export class TeamPlayersPageModule { }
