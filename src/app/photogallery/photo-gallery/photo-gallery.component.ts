import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PhotoGalleryDetialsComponent } from '../photo-gallery-detials/photo-gallery-detials.component';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {

  constructor(public navCtrl: NavController,private modalController:ModalController) { }

    ngOnInit() { 
    
  }
  popPage() {
    this.navCtrl.pop();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PhotoGalleryDetialsComponent,
      cssClass: 'gallery-modal'
    });
    return await modal.present();
  }

}
