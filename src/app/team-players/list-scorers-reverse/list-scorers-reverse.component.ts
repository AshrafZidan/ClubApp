import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PopupModalSearchComponent } from '../popup-modal-search/popup-modal-search.component';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-list-scorers-reverse',
  templateUrl: './list-scorers-reverse.component.html',
  styleUrls: ['./list-scorers-reverse.component.scss'],
})
export class ListScorersReverseComponent implements OnInit {

  constructor(public navCtrl: NavController, public modalController: ModalController) { }

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
  openPage(pagename) {
    this.navCtrl.navigateForward(pagename);
  }
  async searchModal() {
    const modal = await this.modalController.create({
      component: PopupModalSearchComponent,
      cssClass: 'custom-modal-search '

    });
    return await modal.present();
  }
}
