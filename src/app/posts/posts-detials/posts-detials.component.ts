import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-posts-detials',
  templateUrl: './posts-detials.component.html',
  styleUrls: ['./posts-detials.component.scss'],
})
export class PostsDetialsComponent implements OnInit {
  slideOpts = {
    speed: 400,
    slidesPerView: 1.1

  };
  MediaslideOpts = {
    slidesPerView: 2.3,
    speed: 400,

  }
  teamMemberslideOpts = {
    slidesPerView: 4.3,

  }
  cupSlideOpts = {
    slidesPerView: 3.3,

  }
  currentBtn = true;
  @ViewChild(IonSlides) mediaslider: IonSlides;

  firstSlider = [
    {
      photo: './assets/img/headerBg.png'
    },
    {
      photo: './assets/img/headerBg.png'
    },
    {
      photo: './assets/img/headerBg.png'
    }
  ]
  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }
  openPage(pagename) {
    this.navCtrl.navigateForward(pagename);
  }


}
