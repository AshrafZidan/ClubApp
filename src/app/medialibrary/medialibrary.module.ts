import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedialibraryPageRoutingModule } from './medialibrary-routing.module';
import { MediaLibraryComponent } from './media-library/media-library.component';
import { MediaLibraryDetailsComponent } from './media-library-details/media-library-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedialibraryPageRoutingModule,
    SharedModule
  ],
  declarations: [MediaLibraryComponent, MediaLibraryDetailsComponent]
})
export class MedialibraryPageModule { }
