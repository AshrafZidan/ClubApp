import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaLibraryDetailsComponent } from './media-library-details/media-library-details.component';
import { MediaLibraryComponent } from './media-library/media-library.component';


const routes: Routes = [
  {
    path: '',
    component: MediaLibraryComponent
  },
  {
    path: 'media-details',
    component: MediaLibraryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedialibraryPageRoutingModule { }
