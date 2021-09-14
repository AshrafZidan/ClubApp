import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-photo-gallery-detials',
  templateUrl: './photo-gallery-detials.component.html',
  styleUrls: ['./photo-gallery-detials.component.scss'],
})
export class PhotoGalleryDetialsComponent implements OnInit {

  constructor(public navCtrl: NavController,private modalController:ModalController) { }
  slideOpts = {
    pagination: true,
    speed: 10
  }
  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }
  closeModal(){
    this.modalController.dismiss()
  }

}
