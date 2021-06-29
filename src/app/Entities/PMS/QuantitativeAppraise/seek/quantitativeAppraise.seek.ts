import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { QuantitativeAppraise } from '../quantitativeAppraise';


@Component({
  selector: 'pms-quantitativeAppraise-seek',
  templateUrl: './quantitativeAppraise.seek.html',
  styleUrls: ['./quantitativeAppraise.seek.css']
})
export class QuantitativeAppraiseSeekUI extends SeekModal<QuantitativeAppraise> {

  quantitativeAppraise: QuantitativeAppraise = new QuantitativeAppraise();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.quantitativeAppraise);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}