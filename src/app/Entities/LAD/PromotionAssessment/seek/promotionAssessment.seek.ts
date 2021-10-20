import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PromotionAssessment } from '../promotionAssessment';


@Component({
  selector: 'lad-promotionAssessment-seek',
  templateUrl: './promotionAssessment.seek.html',
  styleUrls: ['./promotionAssessment.seek.css']
})
export class PromotionAssessmentSeekUI extends SeekModal<PromotionAssessment> {

  promotionAssessment: PromotionAssessment = new PromotionAssessment();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.promotionAssessment);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}