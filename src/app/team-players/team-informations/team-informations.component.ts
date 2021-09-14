import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-team-informations',
  templateUrl: './team-informations.component.html',
  styleUrls: ['./team-informations.component.scss'],
})
export class TeamInformationsComponent implements OnInit {
  @ViewChild("timeDetails") timeDetails;
   constructor(public navCtrl: NavController) { }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (this.timeDetails) {
      
    const clickedInside = this.timeDetails.nativeElement.contains(event.target);

     if (!clickedInside) {
     this.showTimeDetails = false;
     }
    }

  }
  lastMangerContainer = false;
  currentMangerContainer = true;
  showTimeDetails = false;
  ngOnInit() { }
  popPage() {
    this.navCtrl.pop();
  }

  toggleDivs(div){
    if (div == 'current') {
      
      this.currentMangerContainer = true; 
      this.lastMangerContainer = false; 

    }else{
      this.currentMangerContainer = false; 

      this.lastMangerContainer = true; 
    }

  }
  showTimesDetails(){
    this.showTimeDetails =  ! this.showTimeDetails;

  }

}
