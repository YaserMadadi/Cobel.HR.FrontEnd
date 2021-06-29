import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Unit } from '../unit';


@Component({
  selector: 'hr-unit-seek',
  templateUrl: './unit.seek.html',
  styleUrls: ['./unit.seek.css']
})
export class UnitSeekUI extends SeekModal<Unit> {

  unit: Unit = new Unit();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.unit);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}