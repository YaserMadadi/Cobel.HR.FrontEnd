import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { BehavioralAppraise } from '../behavioralAppraise';


@Component({
  selector: 'pms-behavioralAppraise-seek',
  templateUrl: './behavioralAppraise.seek.html',
  styleUrls: ['./behavioralAppraise.seek.css']
})
export class BehavioralAppraiseSeekUI extends SeekModal<BehavioralAppraise> {

  behavioralAppraise: BehavioralAppraise = new BehavioralAppraise();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.behavioralAppraise);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}