import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FunctionalObjective } from '../functionalObjective';


@Component({
  selector: 'pms-functionalObjective-seek',
  templateUrl: './functionalObjective.seek.html',
  styleUrls: ['./functionalObjective.seek.css']
})
export class FunctionalObjectiveSeekUI extends SeekModal<FunctionalObjective> {

  functionalObjective: FunctionalObjective = new FunctionalObjective();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.functionalObjective);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}