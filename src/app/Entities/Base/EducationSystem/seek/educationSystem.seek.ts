import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { EducationSystem } from '../educationSystem';


@Component({
  selector: 'base-educationSystem-seek',
  templateUrl: './educationSystem.seek.html',
  styleUrls: ['./educationSystem.seek.css']
})
export class EducationSystemSeekUI extends SeekModal<EducationSystem> {

  educationSystem: EducationSystem = new EducationSystem();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.educationSystem);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}