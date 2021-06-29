import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { HabitancyType } from '../habitancyType';


@Component({
  selector: 'base-habitancyType-seek',
  templateUrl: './habitancyType.seek.html',
  styleUrls: ['./habitancyType.seek.css']
})
export class HabitancyTypeSeekUI extends SeekModal<HabitancyType> {

  habitancyType: HabitancyType = new HabitancyType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.habitancyType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}