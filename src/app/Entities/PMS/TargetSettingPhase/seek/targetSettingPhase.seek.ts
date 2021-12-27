
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { TargetSettingPhase } from '../targetSettingPhase';


@Component({
  selector: 'pms-targetSettingPhase-seek',
  templateUrl: './targetSettingPhase.seek.html',
  styleUrls: ['./targetSettingPhase.seek.css']
})
export class TargetSettingPhaseSeekUI extends SeekModal<TargetSettingPhase> {

  targetSettingPhase: TargetSettingPhase = new TargetSettingPhase();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.targetSettingPhase);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
