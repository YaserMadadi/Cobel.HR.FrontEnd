import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CriticalIncident } from '../criticalIncident';
import { CriticalIncidentService } from '../criticalIncident.service';
import { CriticalIncidentDeleteUI } from '../delete/criticalIncident.delete';
import { CriticalIncidentEditUI } from '../edit/criticalIncident.edit';
import { CriticalIncidentRecognitionService } from '../../CriticalIncidentRecognition/criticalIncidentRecognition.service';



@Component({
  selector: 'pms-criticalIncident-master',
  templateUrl: './criticalIncident.master.html',
  styleUrls: ['./criticalIncident.master.css'],
  
})
export class CriticalIncidentMasterUI extends MasterModal<CriticalIncident> {

  constructor(private criticalIncidentService: CriticalIncidentService) {
    super(criticalIncidentService);
  }
}