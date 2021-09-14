import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PopupModalSearchComponent } from '../popup-modal-search/popup-modal-search.component';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-foreign-players',
  templateUrl: './foreign-players.component.html',
  styleUrls: ['./foreign-players.component.scss'],
})
export class ForeignPlayersComponent implements OnInit {

  constructor(public navCtrl: NavController, public modalController: ModalController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }
  openPage(pagename) {
    this.navCtrl.navigateForward(pagename);
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
