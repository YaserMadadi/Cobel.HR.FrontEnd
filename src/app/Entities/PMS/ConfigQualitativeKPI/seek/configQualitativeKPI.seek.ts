import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ConfigQualitativeKPI } from '../configQualitativeKPI';


@Component({
  selector: 'pms-configQualitativeKPI-seek',
  templateUrl: './configQualitativeKPI.seek.html',
  styleUrls: ['./configQualitativeKPI.seek.css']
})
export class ConfigQualitativeKPISeekUI extends SeekModal<ConfigQualitativeKPI> {

  configQualitativeKPI: ConfigQualitativeKPI = new ConfigQualitativeKPI();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.configQualitativeKPI);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}