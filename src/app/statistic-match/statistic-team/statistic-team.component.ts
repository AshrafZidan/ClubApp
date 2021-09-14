import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-statistic-team',
  templateUrl: './statistic-team.component.html',
  styleUrls: ['./statistic-team.component.scss'],
})
export class StatisticTeamComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }
}
