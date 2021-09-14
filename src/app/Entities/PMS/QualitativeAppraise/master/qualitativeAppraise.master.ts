import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { QualitativeAppraise } from '../qualitativeAppraise';
import { QualitativeAppraiseService } from '../qualitativeAppraise.service';
import { QualitativeAppraiseDeleteUI } from '../delete/qualitativeAppraise.delete';
import { QualitativeAppraiseEditUI } from '../edit/qualitativeAppraise.edit';



@Component({
  selector: 'pms-qualitativeAppraise-master',
  templateUrl: './qualitativeAppraise.master.html',
  styleUrls: ['./qualitativeAppraise.master.css']
})
export class QualitativeAppraiseMasterUI extends MasterModal<QualitativeAppraise> {

  constructor(private qualitativeAppraiseService: QualitativeAppraiseService) {
    super(qualitativeAppraiseService);
  }
}