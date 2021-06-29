import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CriticalIncident } from '../criticalIncident';
import { CriticalIncidentService } from '../criticalIncident.service';


@Component({
  selector: 'pms-criticalIncident-delete',
  templateUrl: './criticalIncident.delete.html',
  styleUrls: ['./criticalIncident.delete.css'],
  providers: [CriticalIncidentService]
})
export class CriticalIncidentDeleteUI extends DeleteModal<CriticalIncident> {

    constructor(private criticalIncidentService: CriticalIncidentService){
        super(criticalIncidentService);
    }

}