import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { DevelopmentPlanPriority } from '../developmentPlanPriority';
import { DevelopmentPlanPriorityService } from '../developmentPlanPriority.service';


@Component({
  selector: 'base-pms-developmentPlanPriority-delete',
  templateUrl: './developmentPlanPriority.delete.html',
  styleUrls: ['./developmentPlanPriority.delete.css'],
  
})
export class DevelopmentPlanPriorityDeleteUI extends DeleteModal<DevelopmentPlanPriority> {

    constructor(private developmentPlanPriorityService: DevelopmentPlanPriorityService){
        super(developmentPlanPriorityService);
    }

}