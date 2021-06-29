import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CurrentSituation } from '../currentSituation';


@Component({
  selector: 'base-pms-currentSituation-seek',
  templateUrl: './currentSituation.seek.html',
  styleUrls: ['./currentSituation.seek.css']
})
export class CurrentSituationSeekUI extends SeekModal<CurrentSituation> {

  currentSituation: CurrentSituation = new CurrentSituation();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.currentSituation);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}