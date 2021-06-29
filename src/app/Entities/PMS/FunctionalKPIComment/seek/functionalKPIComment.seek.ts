import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FunctionalKPIComment } from '../functionalKPIComment';


@Component({
  selector: 'pms-functionalKPIComment-seek',
  templateUrl: './functionalKPIComment.seek.html',
  styleUrls: ['./functionalKPIComment.seek.css']
})
export class FunctionalKPICommentSeekUI extends SeekModal<FunctionalKPIComment> {

  functionalKPIComment: FunctionalKPIComment = new FunctionalKPIComment();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.functionalKPIComment);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}