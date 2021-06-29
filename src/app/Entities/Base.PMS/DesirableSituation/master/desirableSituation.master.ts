import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { DesirableSituation } from '../desirableSituation';
import { DesirableSituationService } from '../desirableSituation.service';
import { DesirableSituationDeleteUI } from '../delete/desirableSituation.delete';
import { DesirableSituationEditUI } from '../edit/desirableSituation.edit';
import { IndividualDevelopmentPlanService } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.service';



@Component({
  selector: 'base-pms-desirableSituation-master',
  templateUrl: './desirableSituation.master.html',
  styleUrls: ['./desirableSituation.master.css'],
  providers: [
    DesirableSituationService,
    IndividualDevelopmentPlanService,
  ]
})
export class DesirableSituationMasterUI extends MasterModal<DesirableSituation> {

  constructor(private desirableSituationService: DesirableSituationService) {
    super(desirableSituationService);
  }
}