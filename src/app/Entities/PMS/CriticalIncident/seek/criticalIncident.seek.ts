import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CriticalIncident } from '../criticalIncident';


@Component({
  selector: 'pms-criticalIncident-seek',
  templateUrl: './criticalIncident.seek.html',
  styleUrls: ['./criticalIncident.seek.css']
})
export class CriticalIncidentSeekUI extends SeekModal<CriticalIncident> {

  criticalIncident: CriticalIncident = new CriticalIncident();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.criticalIncident);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}