import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CurrentSituation } from '../currentSituation';
import { CurrentSituationService } from '../currentSituation.service';
import { CurrentSituationDeleteUI } from '../delete/currentSituation.delete';
import { CurrentSituationEditUI } from '../edit/currentSituation.edit';
import { IndividualDevelopmentPlanService } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.service';



@Component({
  selector: 'base-pms-currentSituation-master',
  templateUrl: './currentSituation.master.html',
  styleUrls: ['./currentSituation.master.css'],
  providers: [
    CurrentSituationService,
    IndividualDevelopmentPlanService,
  ]
})
export class CurrentSituationMasterUI extends MasterModal<CurrentSituation> {

  constructor(private currentSituationService: CurrentSituationService) {
    super(currentSituationService);
  }
}