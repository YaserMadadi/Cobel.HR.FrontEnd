import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { UniversityDegree } from '../universityDegree';


@Component({
  selector: 'base-universityDegree-seek',
  templateUrl: './universityDegree.seek.html',
  styleUrls: ['./universityDegree.seek.css']
})
export class UniversityDegreeSeekUI extends SeekModal<UniversityDegree> {

  universityDegree: UniversityDegree = new UniversityDegree();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.universityDegree);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}