import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotogalleryPageRoutingModule } from './photogallery-routing.module';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoGalleryDetialsComponent } from './photo-gallery-detials/photo-gallery-detials.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotogalleryPageRoutingModule,
    SharedModule
  ],
  declarations: [PhotoGalleryComponent, PhotoGalleryDetialsComponent]
})
export class PhotogalleryPageModule { }
