import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { BehavioralKPI } from '../behavioralKPI';


@Component({
  selector: 'pms-behavioralKPI-seek',
  templateUrl: './behavioralKPI.seek.html',
  styleUrls: ['./behavioralKPI.seek.css']
})
export class BehavioralKPISeekUI extends SeekModal<BehavioralKPI> {

  behavioralKPI: BehavioralKPI = new BehavioralKPI();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.behavioralKPI);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}