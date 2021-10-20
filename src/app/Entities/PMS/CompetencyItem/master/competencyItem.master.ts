import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';
import { CompetencyItemDeleteUI } from '../delete/competencyItem.delete';
import { CompetencyItemEditUI } from '../edit/competencyItem.edit';
import { BehavioralObjectiveService } from '../../BehavioralObjective/behavioralObjective.service';
import { AssessmentScoreService } from '../../../LAD/AssessmentScore/assessmentScore.service';
import { CompetencyItemKPIService } from '../../CompetencyItemKPI/competencyItemKPI.service';
import { DevelopmentPlanCompetencyService } from '../../DevelopmentPlanCompetency/developmentPlanCompetency.service';



@Component({
  selector: 'pms-competencyItem-master',
  templateUrl: './competencyItem.master.html',
  styleUrls: ['./competencyItem.master.css']
})
export class CompetencyItemMasterUI extends MasterModal<CompetencyItem> {

  constructor(private competencyItemService: CompetencyItemService) {
    super(competencyItemService);
  }
}