import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { DevelopmentPlanCompetency } from '../developmentPlanCompetency';
import { DevelopmentPlanCompetencyService } from '../developmentPlanCompetency.service';
import { DevelopmentPlanCompetencyDeleteUI } from '../delete/developmentPlanCompetency.delete';
import { DevelopmentPlanCompetencyEditUI } from '../edit/developmentPlanCompetency.edit';



@Component({
  selector: 'pms-developmentPlanCompetency-master',
  templateUrl: './developmentPlanCompetency.master.html',
  styleUrls: ['./developmentPlanCompetency.master.css']
})
export class DevelopmentPlanCompetencyMasterUI extends MasterModal<DevelopmentPlanCompetency> {

  constructor(private developmentPlanCompetencyService: DevelopmentPlanCompetencyService) {
    super(developmentPlanCompetencyService);
  }
}