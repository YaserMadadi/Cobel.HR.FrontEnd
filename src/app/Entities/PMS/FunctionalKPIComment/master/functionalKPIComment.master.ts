import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FunctionalKPIComment } from '../functionalKPIComment';
import { FunctionalKPICommentService } from '../functionalKPIComment.service';
import { FunctionalKPICommentDeleteUI } from '../delete/functionalKPIComment.delete';
import { FunctionalKPICommentEditUI } from '../edit/functionalKPIComment.edit';



@Component({
  selector: 'pms-functionalKPIComment-master',
  templateUrl: './functionalKPIComment.master.html',
  styleUrls: ['./functionalKPIComment.master.css'],
  providers: [
    FunctionalKPICommentService,
    
  ]
})
export class FunctionalKPICommentMasterUI extends MasterModal<FunctionalKPIComment> {

  constructor(private functionalKPICommentService: FunctionalKPICommentService) {
    super(functionalKPICommentService);
  }
}