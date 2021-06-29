import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ConfigTargetSetting } from '../configTargetSetting';


@Component({
  selector: 'pms-configTargetSetting-seek',
  templateUrl: './configTargetSetting.seek.html',
  styleUrls: ['./configTargetSetting.seek.css']
})
export class ConfigTargetSettingSeekUI extends SeekModal<ConfigTargetSetting> {

  configTargetSetting: ConfigTargetSetting = new ConfigTargetSetting();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.configTargetSetting);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}