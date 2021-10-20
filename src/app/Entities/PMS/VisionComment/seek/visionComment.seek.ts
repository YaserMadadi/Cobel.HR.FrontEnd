import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { VisionComment } from '../visionComment';


@Component({
  selector: 'pms-visionComment-seek',
  templateUrl: './visionComment.seek.html',
  styleUrls: ['./visionComment.seek.css']
})
export class VisionCommentSeekUI extends SeekModal<VisionComment> {

  visionComment: VisionComment = new VisionComment();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.visionComment);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}