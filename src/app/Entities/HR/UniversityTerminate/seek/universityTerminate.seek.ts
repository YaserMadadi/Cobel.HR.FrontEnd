import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { UniversityTerminate } from '../universityTerminate';


@Component({
  selector: 'hr-universityTerminate-seek',
  templateUrl: './universityTerminate.seek.html',
  styleUrls: ['./universityTerminate.seek.css']
})
export class UniversityTerminateSeekUI extends SeekModal<UniversityTerminate> {

  universityTerminate: UniversityTerminate = new UniversityTerminate();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.universityTerminate);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}