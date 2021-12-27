
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { TargetSettingMode } from '../targetSettingMode';


@Component({
  selector: 'base-pms-targetSettingMode-seek',
  templateUrl: './targetSettingMode.seek.html',
  styleUrls: ['./targetSettingMode.seek.css']
})
export class TargetSettingModeSeekUI extends SeekModal<TargetSettingMode> {

  targetSettingMode: TargetSettingMode = new TargetSettingMode();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.targetSettingMode);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
