import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FunctionalAppraise } from '../functionalAppraise';


@Component({
  selector: 'pms-functionalAppraise-seek',
  templateUrl: './functionalAppraise.seek.html',
  styleUrls: ['./functionalAppraise.seek.css']
})
export class FunctionalAppraiseSeekUI extends SeekModal<FunctionalAppraise> {

  functionalAppraise: FunctionalAppraise = new FunctionalAppraise();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.functionalAppraise);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}