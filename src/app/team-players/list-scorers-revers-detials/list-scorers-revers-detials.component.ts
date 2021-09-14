import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-scorers-revers-detials',
  templateUrl: './list-scorers-revers-detials.component.html',
  styleUrls: ['./list-scorers-revers-detials.component.scss'],
})
export class ListScorersReversDetialsComponent implements OnInit {
  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }


}
