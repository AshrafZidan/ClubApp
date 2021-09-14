import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foreign-players-detials',
  templateUrl: './foreign-players-detials.component.html',
  styleUrls: ['./foreign-players-detials.component.scss'],
})
export class ForeignPlayersDetialsComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

}
