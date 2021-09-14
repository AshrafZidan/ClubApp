import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticMatchPageRoutingModule } from './statistic-match-routing.module';

import { StatisticMatchPage } from './statistics/statistic-match.page';
import { SharedModule } from '../shared/shared.module';
import { MatchYearsComponent } from './match-years/match-years.component';
import { StatisticTeamComponent } from './statistic-team/statistic-team.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticMatchPageRoutingModule,
    SharedModule

  ],
  declarations: [StatisticMatchPage, MatchYearsComponent, StatisticTeamComponent]
})
export class StatisticMatchPageModule { }
