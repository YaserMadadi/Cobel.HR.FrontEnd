
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { TargetSettingType } from '../targetSettingType';


@Component({
  selector: 'base-pms-targetSettingType-seek',
  templateUrl: './targetSettingType.seek.html',
  styleUrls: ['./targetSettingType.seek.css']
})
export class TargetSettingTypeSeekUI extends SeekModal<TargetSettingType> {

  targetSettingType: TargetSettingType = new TargetSettingType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.targetSettingType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
