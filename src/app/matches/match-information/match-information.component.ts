import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-match-information',
  templateUrl: './match-information.component.html',
  styleUrls: ['./match-information.component.scss'],
})
export class MatchInformationComponent implements OnInit {
matchContainer= false;
formationContainer = false;
genralLookContainer = false;
minuteContainer = true;

  changeStatus = 'matchContainer'
  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

  toggleContainer(section) {
    this.changeStatus = section;
  }
}
