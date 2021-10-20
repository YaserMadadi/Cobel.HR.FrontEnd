import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AssessorConnectionLine } from '../assessorConnectionLine';


@Component({
  selector: 'lad-assessorConnectionLine-seek',
  templateUrl: './assessorConnectionLine.seek.html',
  styleUrls: ['./assessorConnectionLine.seek.css']
})
export class AssessorConnectionLineSeekUI extends SeekModal<AssessorConnectionLine> {

  assessorConnectionLine: AssessorConnectionLine = new AssessorConnectionLine();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.assessorConnectionLine);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}