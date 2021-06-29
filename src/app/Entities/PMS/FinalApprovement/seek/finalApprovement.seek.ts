import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FinalApprovement } from '../finalApprovement';


@Component({
  selector: 'pms-finalApprovement-seek',
  templateUrl: './finalApprovement.seek.html',
  styleUrls: ['./finalApprovement.seek.css']
})
export class FinalApprovementSeekUI extends SeekModal<FinalApprovement> {

  finalApprovement: FinalApprovement = new FinalApprovement();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.finalApprovement);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}