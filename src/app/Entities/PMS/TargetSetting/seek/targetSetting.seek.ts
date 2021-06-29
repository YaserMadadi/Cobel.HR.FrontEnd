import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { TargetSetting } from '../targetSetting';


@Component({
  selector: 'pms-targetSetting-seek',
  templateUrl: './targetSetting.seek.html',
  styleUrls: ['./targetSetting.seek.css']
})
export class TargetSettingSeekUI extends SeekModal<TargetSetting> {

  targetSetting: TargetSetting = new TargetSetting();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.targetSetting);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}