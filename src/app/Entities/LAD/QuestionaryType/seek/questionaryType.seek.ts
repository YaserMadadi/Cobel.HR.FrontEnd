import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { QuestionaryType } from '../questionaryType';


@Component({
  selector: 'lad-questionaryType-seek',
  templateUrl: './questionaryType.seek.html',
  styleUrls: ['./questionaryType.seek.css']
})
export class QuestionaryTypeSeekUI extends SeekModal<QuestionaryType> {

  questionaryType: QuestionaryType = new QuestionaryType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.questionaryType);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}