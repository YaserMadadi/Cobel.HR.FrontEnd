import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FunctionalAppraise } from '../functionalAppraise';
import { FunctionalAppraiseService } from '../functionalAppraise.service';
import { FunctionalAppraiseDeleteUI } from '../delete/functionalAppraise.delete';
import { FunctionalAppraiseEditUI } from '../edit/functionalAppraise.edit';



@Component({
  selector: 'pms-functionalAppraise-master',
  templateUrl: './functionalAppraise.master.html',
  styleUrls: ['./functionalAppraise.master.css']
})
export class FunctionalAppraiseMasterUI extends MasterModal<FunctionalAppraise> {

  constructor(private functionalAppraiseService: FunctionalAppraiseService) {
    super(functionalAppraiseService);
  }
}