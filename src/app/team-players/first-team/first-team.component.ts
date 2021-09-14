import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PopupModalSearchComponent } from '../popup-modal-search/popup-modal-search.component';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-first-team',
  templateUrl: './first-team.component.html',
  styleUrls: ['./first-team.component.scss'],
})
export class FirstTeamComponent implements OnInit {
  public statusFlag = 'players';
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

  async searchModal() {
    const modal = await this.modalController.create({
      component: PopupModalSearchComponent,
      cssClass: 'custom-modal-search '

    });
    return await modal.present();
  }
  changeStatus(status) {
    this.statusFlag = status;
  }
  openPage(page) {
    this.navCtrl.navigateForward(page);
  }
}
