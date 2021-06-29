import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { VisionApproved } from '../visionApproved';


@Component({
  selector: 'pms-visionApproved-seek',
  templateUrl: './visionApproved.seek.html',
  styleUrls: ['./visionApproved.seek.css']
})
export class VisionApprovedSeekUI extends SeekModal<VisionApproved> {

  visionApproved: VisionApproved = new VisionApproved();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.visionApproved);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}