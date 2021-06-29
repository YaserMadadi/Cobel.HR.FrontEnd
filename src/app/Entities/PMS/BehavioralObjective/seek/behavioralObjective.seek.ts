import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { BehavioralObjective } from '../behavioralObjective';


@Component({
  selector: 'pms-behavioralObjective-seek',
  templateUrl: './behavioralObjective.seek.html',
  styleUrls: ['./behavioralObjective.seek.css']
})
export class BehavioralObjectiveSeekUI extends SeekModal<BehavioralObjective> {

  behavioralObjective: BehavioralObjective = new BehavioralObjective();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.behavioralObjective);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}