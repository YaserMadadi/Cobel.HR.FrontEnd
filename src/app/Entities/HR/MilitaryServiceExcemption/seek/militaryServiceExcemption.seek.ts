import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MilitaryServiceExcemption } from '../militaryServiceExcemption';


@Component({
  selector: 'hr-militaryServiceExcemption-seek',
  templateUrl: './militaryServiceExcemption.seek.html',
  styleUrls: ['./militaryServiceExcemption.seek.css']
})
export class MilitaryServiceExcemptionSeekUI extends SeekModal<MilitaryServiceExcemption> {

  militaryServiceExcemption: MilitaryServiceExcemption = new MilitaryServiceExcemption();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.militaryServiceExcemption);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}