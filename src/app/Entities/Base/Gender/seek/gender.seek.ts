import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Gender } from '../gender';


@Component({
  selector: 'base-gender-seek',
  templateUrl: './gender.seek.html',
  styleUrls: ['./gender.seek.css']
})
export class GenderSeekUI extends SeekModal<Gender> {

  gender: Gender = new Gender();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.gender);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}