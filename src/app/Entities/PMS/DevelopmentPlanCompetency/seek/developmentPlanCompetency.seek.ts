import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { DevelopmentPlanCompetency } from '../developmentPlanCompetency';


@Component({
  selector: 'pms-developmentPlanCompetency-seek',
  templateUrl: './developmentPlanCompetency.seek.html',
  styleUrls: ['./developmentPlanCompetency.seek.css']
})
export class DevelopmentPlanCompetencySeekUI extends SeekModal<DevelopmentPlanCompetency> {

  developmentPlanCompetency: DevelopmentPlanCompetency = new DevelopmentPlanCompetency();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.developmentPlanCompetency);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}