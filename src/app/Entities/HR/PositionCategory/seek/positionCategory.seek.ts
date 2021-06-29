import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PositionCategory } from '../positionCategory';


@Component({
  selector: 'hr-positionCategory-seek',
  templateUrl: './positionCategory.seek.html',
  styleUrls: ['./positionCategory.seek.css']
})
export class PositionCategorySeekUI extends SeekModal<PositionCategory> {

  positionCategory: PositionCategory = new PositionCategory();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.positionCategory);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}