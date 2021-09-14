import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss'],
})
export class SelectTeamComponent implements OnInit {
  isChecked = true;
  constructor() { }

  ngOnInit() { }
  changeCheckStatus(status) {
    console.log(status);

    // this.isChecked = status;
  }
}
