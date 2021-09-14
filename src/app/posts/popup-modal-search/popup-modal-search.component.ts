import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup-modal-search',
  templateUrl: './popup-modal-search.component.html',
  styleUrls: ['./popup-modal-search.component.scss'],
})
export class PopupModalSearchComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
