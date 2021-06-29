import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { DevelopmentGoal } from '../developmentGoal';


@Component({
  selector: 'lad-developmentGoal-seek',
  templateUrl: './developmentGoal.seek.html',
  styleUrls: ['./developmentGoal.seek.css']
})
export class DevelopmentGoalSeekUI extends SeekModal<DevelopmentGoal> {

  developmentGoal: DevelopmentGoal = new DevelopmentGoal();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.developmentGoal);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}