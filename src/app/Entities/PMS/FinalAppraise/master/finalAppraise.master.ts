import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FinalAppraise } from '../finalAppraise';
import { FinalAppraiseService } from '../finalAppraise.service';
import { FinalAppraiseDeleteUI } from '../delete/finalAppraise.delete';
import { FinalAppraiseEditUI } from '../edit/finalAppraise.edit';



@Component({
  selector: 'pms-finalAppraise-master',
  templateUrl: './finalAppraise.master.html',
  styleUrls: ['./finalAppraise.master.css']
})
export class FinalAppraiseMasterUI extends MasterModal<FinalAppraise> {

  constructor(private finalAppraiseService: FinalAppraiseService) {
    super(finalAppraiseService);
  }
}