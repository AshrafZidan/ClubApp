import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

}
