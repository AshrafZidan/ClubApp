import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesPageRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches/matches.component';
import { MatchInformationComponent } from './match-information/match-information.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchesPageRoutingModule,
    SharedModule
  ],
  declarations: [MatchesComponent, MatchInformationComponent]
})
export class MatchesPageModule { }
