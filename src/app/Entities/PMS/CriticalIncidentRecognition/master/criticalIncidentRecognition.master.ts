import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CriticalIncidentRecognition } from '../criticalIncidentRecognition';
import { CriticalIncidentRecognitionService } from '../criticalIncidentRecognition.service';
import { CriticalIncidentRecognitionDeleteUI } from '../delete/criticalIncidentRecognition.delete';
import { CriticalIncidentRecognitionEditUI } from '../edit/criticalIncidentRecognition.edit';



@Component({
  selector: 'pms-criticalIncidentRecognition-master',
  templateUrl: './criticalIncidentRecognition.master.html',
  styleUrls: ['./criticalIncidentRecognition.master.css']
})
export class CriticalIncidentRecognitionMasterUI extends MasterModal<CriticalIncidentRecognition> {

  constructor(private criticalIncidentRecognitionService: CriticalIncidentRecognitionService) {
    super(criticalIncidentRecognitionService);
  }
}