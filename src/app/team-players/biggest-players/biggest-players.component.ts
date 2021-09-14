import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PopupModalSearchComponent } from '../popup-modal-search/popup-modal-search.component';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-biggest-players',
  templateUrl: './biggest-players.component.html',
  styleUrls: ['./biggest-players.component.scss'],
})
export class BiggestPlayersComponent implements OnInit {
  constructor(public navCtrl: NavController, public modalController: ModalController) { }
  openPage(pagename) {
    this.navCtrl.navigateForward(pagename);
  }
  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PopupModalComponent,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }

  async searchModal() {
    const modal = await this.modalController.create({
      component: PopupModalSearchComponent,
      cssClass: 'custom-modal-search '

    });
    return await modal.present();
  }
}
