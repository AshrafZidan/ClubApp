import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-statistic-match',
  templateUrl: './statistic-match.page.html',
  styleUrls: ['./statistic-match.page.scss'],
})
export class StatisticMatchPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.6
  };

  selectStatus = "first";
  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }
  changeStatus(state) {
    if (this.selectStatus != state) {
      this.selectStatus = state;
    }
  }
  openPage(pageName) {
    this.navCtrl.navigateForward(pageName);
  }

}
