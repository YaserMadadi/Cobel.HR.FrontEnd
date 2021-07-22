import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Habitancy } from '../habitancy';


@Component({
  selector: 'hr-habitancy-seek',
  templateUrl: './habitancy.seek.html',
  styleUrls: ['./habitancy.seek.css']
})
export class HabitancySeekUI extends SeekModal<Habitancy> {

  habitancy: Habitancy = new Habitancy();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.habitancy);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}