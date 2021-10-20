import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ConfigQualitativeObjective } from '../configQualitativeObjective';


@Component({
  selector: 'pms-configQualitativeObjective-seek',
  templateUrl: './configQualitativeObjective.seek.html',
  styleUrls: ['./configQualitativeObjective.seek.css']
})
export class ConfigQualitativeObjectiveSeekUI extends SeekModal<ConfigQualitativeObjective> {

  configQualitativeObjective: ConfigQualitativeObjective = new ConfigQualitativeObjective();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.configQualitativeObjective);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}