import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { UniversityFieldCategory } from '../universityFieldCategory';


@Component({
  selector: 'base-universityFieldCategory-seek',
  templateUrl: './universityFieldCategory.seek.html',
  styleUrls: ['./universityFieldCategory.seek.css']
})
export class UniversityFieldCategorySeekUI extends SeekModal<UniversityFieldCategory> {

  universityFieldCategory: UniversityFieldCategory = new UniversityFieldCategory();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.universityFieldCategory);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}