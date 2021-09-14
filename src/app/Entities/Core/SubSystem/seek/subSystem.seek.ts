
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { SubSystem } from '../subSystem';


@Component({
  selector: 'core-subSystem-seek',
  templateUrl: './subSystem.seek.html',
  styleUrls: ['./subSystem.seek.css']
})
export class SubSystemSeekUI extends SeekModal<SubSystem> {

  subSystem: SubSystem = new SubSystem();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.subSystem);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
