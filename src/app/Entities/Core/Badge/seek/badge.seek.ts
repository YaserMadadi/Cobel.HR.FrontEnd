
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Badge } from '../badge';


@Component({
  selector: 'core-badge-seek',
  templateUrl: './badge.seek.html',
  styleUrls: ['./badge.seek.css']
})
export class BadgeSeekUI extends SeekModal<Badge> {

  badge: Badge = new Badge();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.badge);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
