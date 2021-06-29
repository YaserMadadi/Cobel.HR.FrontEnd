import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { NonOperationalAppraise } from '../nonOperationalAppraise';
import { NonOperationalAppraiseService } from '../nonOperationalAppraise.service';
import { NonOperationalAppraiseDeleteUI } from '../delete/nonOperationalAppraise.delete';
import { NonOperationalAppraiseEditUI } from '../edit/nonOperationalAppraise.edit';



@Component({
  selector: 'pms-nonOperationalAppraise-master',
  templateUrl: './nonOperationalAppraise.master.html',
  styleUrls: ['./nonOperationalAppraise.master.css'],
  providers: [
    NonOperationalAppraiseService,
    
  ]
})
export class NonOperationalAppraiseMasterUI extends MasterModal<NonOperationalAppraise> {

  constructor(private nonOperationalAppraiseService: NonOperationalAppraiseService) {
    super(nonOperationalAppraiseService);
  }
}