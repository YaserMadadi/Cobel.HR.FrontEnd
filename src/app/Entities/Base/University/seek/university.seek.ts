import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { University } from '../university';


@Component({
  selector: 'base-university-seek',
  templateUrl: './university.seek.html',
  styleUrls: ['./university.seek.css']
})
export class UniversitySeekUI extends SeekModal<University> {

  university: University = new University();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.university);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}