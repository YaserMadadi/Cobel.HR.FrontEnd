import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { SchoolLevel } from '../schoolLevel';


@Component({
  selector: 'base-schoolLevel-seek',
  templateUrl: './schoolLevel.seek.html',
  styleUrls: ['./schoolLevel.seek.css']
})
export class SchoolLevelSeekUI extends SeekModal<SchoolLevel> {

  schoolLevel: SchoolLevel = new SchoolLevel();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.schoolLevel);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}