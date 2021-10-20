import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FunctionalKPI } from '../functionalKPI';
import { FunctionalKPIService } from '../functionalKPI.service';
import { FunctionalKPIDeleteUI } from '../delete/functionalKPI.delete';
import { FunctionalKPIEditUI } from '../edit/functionalKPI.edit';
import { FunctionalKPICommentService } from '../../FunctionalKPIComment/functionalKPIComment.service';
import { FunctionalAppraiseService } from '../../FunctionalAppraise/functionalAppraise.service';



@Component({
  selector: 'pms-functionalKPI-master',
  templateUrl: './functionalKPI.master.html',
  styleUrls: ['./functionalKPI.master.css']
})
export class FunctionalKPIMasterUI extends MasterModal<FunctionalKPI> {

  constructor(private functionalKPIService: FunctionalKPIService) {
    super(functionalKPIService);
  }
}