import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ExcemptionType } from '../excemptionType';


@Component({
  selector: 'base-excemptionType-seek',
  templateUrl: './excemptionType.seek.html',
  styleUrls: ['./excemptionType.seek.css']
})
export class ExcemptionTypeSeekUI extends SeekModal<ExcemptionType> {

  excemptionType: ExcemptionType = new ExcemptionType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.excemptionType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}