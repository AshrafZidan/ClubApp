import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
  cupSlideOpts ={
    slidesPerView: 3.3,

  }
  
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

  mediaSlider = [
    {
      photo: './assets/img/headerBg.png',
      text: 'بعد الفوز على ام صلال احتفالات كبيرة ف كل المدن',
    },
    {
      photo: './assets/img/headerBg.png',
      text: 'بعد الفوز على ام صلال احتفالات كبيرة ف كل المدن',

    },
    {
      photo: './assets/img/headerBg.png',
      text: 'بعد الفوز على ام صلال احتفالات كبيرة ف كل المدن',

    }
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private menuCtrl: MenuController,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // this.mediaslider.options = {
    //   slidesPerView: 2,

    // };
    // this.mediaslider.pager = true;
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  openPage(pageName) {
    this.navCtrl.navigateForward([pageName]);
  }
}
