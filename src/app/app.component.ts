import { Component, OnInit } from '@angular/core';

import { MenuController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'الصفحة الرئيسية',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'معلومات الفريق',
      url: '/team-players/team-info',
      icon: 'info'
    },
    {
      title: 'الاخبار',
      url: '/news',
      icon: 'rss'
    },
    {
      title: 'المشاركات',
      url: '/posts',
      icon: 'trophy'
    },
    {
      title: 'الفريق الاول',
      url: '/team-players/first-team',
      icon: 'tshirt'
    },
    {
      title: 'مكتبة الميديا ',
      url: '/medialibrary',
      icon: 'video'
    }
    ,
    {
      title: 'معرض الصور',
      url: '/photogallery',
      icon: 'images'
    }
    ,
    {
      title: 'احصائيات',
      url: '/statistic-match',
      icon: 'chart-line'
    }
    ,
    {
      title: 'المباريات',
      url: '/matches',
      icon: 'futbol'
    }
    ,
    {
      title: 'البث المباشر',
      url: '/folder/Spam',
      icon: 'tv'
    }
    ,
    {
      title: 'اتصل بنا',
      url: '/contact',
      icon: 'headset'
    }
    ,
    {
      title: 'اللغة',
      url: '/language',
      icon: 'globe'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

  closeMenu() {
    this.menuCtrl.close();
  }
  navigationToPage(page) {
    this.navCtrl.navigateForward([page]);
  }
}
