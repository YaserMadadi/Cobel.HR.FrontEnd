import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { DevelopmentPlanCompetency } from '../developmentPlanCompetency';
import { DevelopmentPlanCompetencyService } from '../developmentPlanCompetency.service';


@Component({
  selector: 'pms-developmentPlanCompetency-delete',
  templateUrl: './developmentPlanCompetency.delete.html',
  styleUrls: ['./developmentPlanCompetency.delete.css'],
  providers: [DevelopmentPlanCompetencyService]
})
export class DevelopmentPlanCompetencyDeleteUI extends DeleteModal<DevelopmentPlanCompetency> {

    constructor(private developmentPlanCompetencyService: DevelopmentPlanCompetencyService){
        super(developmentPlanCompetencyService);
    }

}