import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { HealthStatus } from '../healthStatus';
import { HealthStatusService } from '../healthStatus.service';
import { HealthStatusDeleteUI } from '../delete/healthStatus.delete';
import { HealthStatusEditUI } from '../edit/healthStatus.edit';
import { PersonService } from '../../../HR/Person/person.service';



@Component({
  selector: 'base-healthStatus-master',
  templateUrl: './healthStatus.master.html',
  styleUrls: ['./healthStatus.master.css'],
  
})
export class HealthStatusMasterUI extends MasterModal<HealthStatus> {

  constructor(private healthStatusService: HealthStatusService) {
    super(healthStatusService);
  }
}