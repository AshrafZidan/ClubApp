import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPageRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostsDetialsComponent } from './posts-detials/posts-detials.component';
import { ConfrontationsComponent } from './confrontations/confrontations.component';
import { SharedModule } from '../shared/shared.module';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { PopupModalSearchComponent } from './popup-modal-search/popup-modal-search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    SharedModule
  ],
  declarations: [PostsComponent, ConfrontationsComponent, PopupModalComponent, PopupModalSearchComponent,
    PostsDetialsComponent]
})
export class PostsPageModule { }
