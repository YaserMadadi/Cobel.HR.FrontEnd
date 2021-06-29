import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CriticalIncidentType } from '../criticalIncidentType';
import { CriticalIncidentTypeService } from '../criticalIncidentType.service';


@Component({
  selector: 'pms-criticalIncidentType-delete',
  templateUrl: './criticalIncidentType.delete.html',
  styleUrls: ['./criticalIncidentType.delete.css'],
  providers: [CriticalIncidentTypeService]
})
export class CriticalIncidentTypeDeleteUI extends DeleteModal<CriticalIncidentType> {

    constructor(private criticalIncidentTypeService: CriticalIncidentTypeService){
        super(criticalIncidentTypeService);
    }

}