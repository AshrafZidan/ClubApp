import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGalleryDetialsComponent } from './photo-gallery-detials/photo-gallery-detials.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';


const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryComponent
  },
  {
    path: 'photogallery-detials',
    component: PhotoGalleryDetialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotogalleryPageRoutingModule { }
