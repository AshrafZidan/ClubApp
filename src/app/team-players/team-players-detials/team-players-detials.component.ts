import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-team-players-detials',
  templateUrl: './team-players-detials.component.html',
  styleUrls: ['./team-players-detials.component.scss'],
})
export class TeamPlayersDetialsComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

}
