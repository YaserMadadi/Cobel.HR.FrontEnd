import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { UniversityHistory } from '../universityHistory';


@Component({
  selector: 'hr-universityHistory-seek',
  templateUrl: './universityHistory.seek.html',
  styleUrls: ['./universityHistory.seek.css']
})
export class UniversityHistorySeekUI extends SeekModal<UniversityHistory> {

  universityHistory: UniversityHistory = new UniversityHistory();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.universityHistory);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}