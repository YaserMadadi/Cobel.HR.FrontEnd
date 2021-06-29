import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Assessor } from '../assessor';


@Component({
  selector: 'lad-assessor-seek',
  templateUrl: './assessor.seek.html',
  styleUrls: ['./assessor.seek.css']
})
export class AssessorSeekUI extends SeekModal<Assessor> {

  assessor: Assessor = new Assessor();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.assessor);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}