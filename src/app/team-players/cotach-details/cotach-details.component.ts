import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cotach-details',
  templateUrl: './cotach-details.component.html',
  styleUrls: ['./cotach-details.component.scss'],
})
export class CotachDetailsComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }
}
