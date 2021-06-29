import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FieldOfStudy } from '../fieldOfStudy';


@Component({
  selector: 'base-fieldOfStudy-seek',
  templateUrl: './fieldOfStudy.seek.html',
  styleUrls: ['./fieldOfStudy.seek.css']
})
export class FieldOfStudySeekUI extends SeekModal<FieldOfStudy> {

  fieldOfStudy: FieldOfStudy = new FieldOfStudy();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.fieldOfStudy);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}