import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FunctionalObjectiveComment } from '../functionalObjectiveComment';


@Component({
  selector: 'pms-functionalObjectiveComment-seek',
  templateUrl: './functionalObjectiveComment.seek.html',
  styleUrls: ['./functionalObjectiveComment.seek.css']
})
export class FunctionalObjectiveCommentSeekUI extends SeekModal<FunctionalObjectiveComment> {

  functionalObjectiveComment: FunctionalObjectiveComment = new FunctionalObjectiveComment();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.functionalObjectiveComment);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}