import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CompetencyItemKPI } from '../competencyItemKPI';
import { CompetencyItemKPIService } from '../competencyItemKPI.service';
import { CompetencyItemKPIDeleteUI } from '../delete/competencyItemKPI.delete';
import { CompetencyItemKPIEditUI } from '../edit/competencyItemKPI.edit';
import { BehavioralKPIService } from '../../BehavioralKPI/behavioralKPI.service';



@Component({
  selector: 'pms-competencyItemKPI-master',
  templateUrl: './competencyItemKPI.master.html',
  styleUrls: ['./competencyItemKPI.master.css'],
  providers: [
    CompetencyItemKPIService,
    BehavioralKPIService,
  ]
})
export class CompetencyItemKPIMasterUI extends MasterModal<CompetencyItemKPI> {

  constructor(private competencyItemKPIService: CompetencyItemKPIService) {
    super(competencyItemKPIService);
  }
}