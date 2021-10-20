import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AnswerType } from '../answerType';


@Component({
  selector: 'lad-answerType-seek',
  templateUrl: './answerType.seek.html',
  styleUrls: ['./answerType.seek.css']
})
export class AnswerTypeSeekUI extends SeekModal<AnswerType> {

  answerType: AnswerType = new AnswerType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.answerType);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}