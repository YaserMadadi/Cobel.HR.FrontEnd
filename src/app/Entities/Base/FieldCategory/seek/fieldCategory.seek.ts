import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FieldCategory } from '../fieldCategory';


@Component({
  selector: 'base-fieldCategory-seek',
  templateUrl: './fieldCategory.seek.html',
  styleUrls: ['./fieldCategory.seek.css']
})
export class FieldCategorySeekUI extends SeekModal<FieldCategory> {

  fieldCategory: FieldCategory = new FieldCategory();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.fieldCategory);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}