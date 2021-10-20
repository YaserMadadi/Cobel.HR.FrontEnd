import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { WorkExperience } from '../workExperience';


@Component({
  selector: 'hr-workExperience-seek',
  templateUrl: './workExperience.seek.html',
  styleUrls: ['./workExperience.seek.css']
})
export class WorkExperienceSeekUI extends SeekModal<WorkExperience> {

  workExperience: WorkExperience = new WorkExperience();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.workExperience);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}