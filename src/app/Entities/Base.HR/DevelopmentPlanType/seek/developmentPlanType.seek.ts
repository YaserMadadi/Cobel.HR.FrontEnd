import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { DevelopmentPlanType } from '../developmentPlanType';


@Component({
  selector: 'base-hr-developmentPlanType-seek',
  templateUrl: './developmentPlanType.seek.html',
  styleUrls: ['./developmentPlanType.seek.css']
})
export class DevelopmentPlanTypeSeekUI extends SeekModal<DevelopmentPlanType> {

  developmentPlanType: DevelopmentPlanType = new DevelopmentPlanType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.developmentPlanType);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}