import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-scorers-attack-detials',
  templateUrl: './list-scorers-attack-detials.component.html',
  styleUrls: ['./list-scorers-attack-detials.component.scss'],
})
export class ListScorersAttackDetialsComponent implements OnInit {


  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

}
