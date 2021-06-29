import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { QuestionaryItem } from '../questionaryItem';


@Component({
  selector: 'lad-questionaryItem-seek',
  templateUrl: './questionaryItem.seek.html',
  styleUrls: ['./questionaryItem.seek.css']
})
export class QuestionaryItemSeekUI extends SeekModal<QuestionaryItem> {

  questionaryItem: QuestionaryItem = new QuestionaryItem();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.questionaryItem);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}