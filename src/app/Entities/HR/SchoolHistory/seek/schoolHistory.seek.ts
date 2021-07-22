import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { SchoolHistory } from '../schoolHistory';


@Component({
  selector: 'hr-schoolHistory-seek',
  templateUrl: './schoolHistory.seek.html',
  styleUrls: ['./schoolHistory.seek.css']
})
export class SchoolHistorySeekUI extends SeekModal<SchoolHistory> {

  schoolHistory: SchoolHistory = new SchoolHistory();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.schoolHistory);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}