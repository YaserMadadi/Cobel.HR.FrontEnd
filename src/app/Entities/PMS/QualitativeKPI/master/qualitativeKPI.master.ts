import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { QualitativeKPI } from '../qualitativeKPI';
import { QualitativeKPIService } from '../qualitativeKPI.service';
import { QualitativeKPIDeleteUI } from '../delete/qualitativeKPI.delete';
import { QualitativeKPIEditUI } from '../edit/qualitativeKPI.edit';
import { QualitativeAppraiseService } from '../../QualitativeAppraise/qualitativeAppraise.service';



@Component({
  selector: 'pms-qualitativeKPI-master',
  templateUrl: './qualitativeKPI.master.html',
  styleUrls: ['./qualitativeKPI.master.css'],
  providers: [
    QualitativeKPIService,
    QualitativeAppraiseService,
  ]
})
export class QualitativeKPIMasterUI extends MasterModal<QualitativeKPI> {

  constructor(private qualitativeKPIService: QualitativeKPIService) {
    super(qualitativeKPIService);
  }
}