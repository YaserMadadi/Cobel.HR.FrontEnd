import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { QualitativeObjective } from '../qualitativeObjective';
import { QualitativeObjectiveService } from '../qualitativeObjective.service';
import { QualitativeObjectiveDeleteUI } from '../delete/qualitativeObjective.delete';
import { QualitativeObjectiveEditUI } from '../edit/qualitativeObjective.edit';
import { QualitativeKPIService } from '../../QualitativeKPI/qualitativeKPI.service';



@Component({
  selector: 'pms-qualitativeObjective-master',
  templateUrl: './qualitativeObjective.master.html',
  styleUrls: ['./qualitativeObjective.master.css'],
  
})
export class QualitativeObjectiveMasterUI extends MasterModal<QualitativeObjective> {

  constructor(private qualitativeObjectiveService: QualitativeObjectiveService) {
    super(qualitativeObjectiveService);
  }
}