import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { IndividualDevelopmentPlan } from '../individualDevelopmentPlan';


@Component({
  selector: 'pms-individualDevelopmentPlan-seek',
  templateUrl: './individualDevelopmentPlan.seek.html',
  styleUrls: ['./individualDevelopmentPlan.seek.css']
})
export class IndividualDevelopmentPlanSeekUI extends SeekModal<IndividualDevelopmentPlan> {

  individualDevelopmentPlan: IndividualDevelopmentPlan = new IndividualDevelopmentPlan();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.individualDevelopmentPlan);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}