import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

}
