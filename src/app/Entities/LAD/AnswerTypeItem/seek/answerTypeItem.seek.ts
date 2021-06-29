import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AnswerTypeItem } from '../answerTypeItem';


@Component({
  selector: 'lad-answerTypeItem-seek',
  templateUrl: './answerTypeItem.seek.html',
  styleUrls: ['./answerTypeItem.seek.css']
})
export class AnswerTypeItemSeekUI extends SeekModal<AnswerTypeItem> {

  answerTypeItem: AnswerTypeItem = new AnswerTypeItem();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.answerTypeItem);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}