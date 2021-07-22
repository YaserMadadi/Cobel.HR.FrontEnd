import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CriticalIncidentRecognition } from '../criticalIncidentRecognition';


@Component({
  selector: 'pms-criticalIncidentRecognition-seek',
  templateUrl: './criticalIncidentRecognition.seek.html',
  styleUrls: ['./criticalIncidentRecognition.seek.css']
})
export class CriticalIncidentRecognitionSeekUI extends SeekModal<CriticalIncidentRecognition> {

  criticalIncidentRecognition: CriticalIncidentRecognition = new CriticalIncidentRecognition();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.criticalIncidentRecognition);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}