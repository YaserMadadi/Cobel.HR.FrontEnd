import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Training } from '../training';


@Component({
  selector: 'idea-training-seek',
  templateUrl: './training.seek.html',
  styleUrls: ['./training.seek.css']
})
export class TrainingSeekUI extends SeekModal<Training> {

  training: Training = new Training();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.training);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}