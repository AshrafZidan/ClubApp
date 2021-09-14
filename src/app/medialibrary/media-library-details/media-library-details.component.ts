import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-media-library-details',
  templateUrl: './media-library-details.component.html',
  styleUrls: ['./media-library-details.component.scss'],
})
export class MediaLibraryDetailsComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

}
