import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { DevelopmentPlanPriority } from '../developmentPlanPriority';


@Component({
  selector: 'base-pms-developmentPlanPriority-seek',
  templateUrl: './developmentPlanPriority.seek.html',
  styleUrls: ['./developmentPlanPriority.seek.css']
})
export class DevelopmentPlanPrioritySeekUI extends SeekModal<DevelopmentPlanPriority> {

  developmentPlanPriority: DevelopmentPlanPriority = new DevelopmentPlanPriority();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.developmentPlanPriority);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}