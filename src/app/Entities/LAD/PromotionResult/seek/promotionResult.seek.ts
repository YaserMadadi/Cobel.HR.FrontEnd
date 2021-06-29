import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PromotionResult } from '../promotionResult';


@Component({
  selector: 'lad-promotionResult-seek',
  templateUrl: './promotionResult.seek.html',
  styleUrls: ['./promotionResult.seek.css']
})
export class PromotionResultSeekUI extends SeekModal<PromotionResult> {

  promotionResult: PromotionResult = new PromotionResult();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.promotionResult);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}