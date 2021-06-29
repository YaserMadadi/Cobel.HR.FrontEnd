import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CriticalIncidentType } from '../criticalIncidentType';
import { CriticalIncidentTypeService } from '../criticalIncidentType.service';
import { CriticalIncidentTypeDeleteUI } from '../delete/criticalIncidentType.delete';
import { CriticalIncidentTypeEditUI } from '../edit/criticalIncidentType.edit';
import { CriticalIncidentService } from '../../CriticalIncident/criticalIncident.service';



@Component({
  selector: 'pms-criticalIncidentType-master',
  templateUrl: './criticalIncidentType.master.html',
  styleUrls: ['./criticalIncidentType.master.css'],
  providers: [
    CriticalIncidentTypeService,
    CriticalIncidentService,
  ]
})
export class CriticalIncidentTypeMasterUI extends MasterModal<CriticalIncidentType> {

  constructor(private criticalIncidentTypeService: CriticalIncidentTypeService) {
    super(criticalIncidentTypeService);
  }
}