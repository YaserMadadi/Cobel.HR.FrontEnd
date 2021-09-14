
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { BadgeType } from '../badgeType';


@Component({
  selector: 'core-badgeType-seek',
  templateUrl: './badgeType.seek.html',
  styleUrls: ['./badgeType.seek.css']
})
export class BadgeTypeSeekUI extends SeekModal<BadgeType> {

  badgeType: BadgeType = new BadgeType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.badgeType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
