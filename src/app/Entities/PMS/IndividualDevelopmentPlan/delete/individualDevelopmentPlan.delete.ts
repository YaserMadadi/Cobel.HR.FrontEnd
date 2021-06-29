import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { IndividualDevelopmentPlan } from '../individualDevelopmentPlan';
import { IndividualDevelopmentPlanService } from '../individualDevelopmentPlan.service';


@Component({
  selector: 'pms-individualDevelopmentPlan-delete',
  templateUrl: './individualDevelopmentPlan.delete.html',
  styleUrls: ['./individualDevelopmentPlan.delete.css'],
  providers: [IndividualDevelopmentPlanService]
})
export class IndividualDevelopmentPlanDeleteUI extends DeleteModal<IndividualDevelopmentPlan> {

    constructor(private individualDevelopmentPlanService: IndividualDevelopmentPlanService){
        super(individualDevelopmentPlanService);
    }

}