import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { HealthStatus } from '../healthStatus';
import { HealthStatusService } from '../healthStatus.service';


@Component({
  selector: 'base-healthStatus-delete',
  templateUrl: './healthStatus.delete.html',
  styleUrls: ['./healthStatus.delete.css'],
  
})
export class HealthStatusDeleteUI extends DeleteModal<HealthStatus> {

    constructor(private healthStatusService: HealthStatusService){
        super(healthStatusService);
    }

}