import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { StrategicObjectve } from '../strategicObjectve';


@Component({
  selector: 'pms-strategicObjectve-seek',
  templateUrl: './strategicObjectve.seek.html',
  styleUrls: ['./strategicObjectve.seek.css']
})
export class StrategicObjectveSeekUI extends SeekModal<StrategicObjectve> {

  strategicObjectve: StrategicObjectve = new StrategicObjectve();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.strategicObjectve);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}