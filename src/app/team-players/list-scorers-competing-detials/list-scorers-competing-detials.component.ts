import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-scorers-competing-detials',
  templateUrl: './list-scorers-competing-detials.component.html',
  styleUrls: ['./list-scorers-competing-detials.component.scss'],
})
export class ListScorersCompetingDetialsComponent implements OnInit {
  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

}
