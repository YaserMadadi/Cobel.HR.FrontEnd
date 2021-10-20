import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CriticalIncidentType } from '../criticalIncidentType';


@Component({
  selector: 'pms-criticalIncidentType-seek',
  templateUrl: './criticalIncidentType.seek.html',
  styleUrls: ['./criticalIncidentType.seek.css']
})
export class CriticalIncidentTypeSeekUI extends SeekModal<CriticalIncidentType> {

  criticalIncidentType: CriticalIncidentType = new CriticalIncidentType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.criticalIncidentType);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}