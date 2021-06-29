import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MilitaryServiceInclusive } from '../militaryServiceInclusive';


@Component({
  selector: 'hr-militaryServiceInclusive-seek',
  templateUrl: './militaryServiceInclusive.seek.html',
  styleUrls: ['./militaryServiceInclusive.seek.css']
})
export class MilitaryServiceInclusiveSeekUI extends SeekModal<MilitaryServiceInclusive> {

  militaryServiceInclusive: MilitaryServiceInclusive = new MilitaryServiceInclusive();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.militaryServiceInclusive);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}