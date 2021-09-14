import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FunctionalObjectiveComment } from '../functionalObjectiveComment';
import { FunctionalObjectiveCommentService } from '../functionalObjectiveComment.service';
import { FunctionalObjectiveCommentDeleteUI } from '../delete/functionalObjectiveComment.delete';
import { FunctionalObjectiveCommentEditUI } from '../edit/functionalObjectiveComment.edit';



@Component({
  selector: 'pms-functionalObjectiveComment-master',
  templateUrl: './functionalObjectiveComment.master.html',
  styleUrls: ['./functionalObjectiveComment.master.css']
})
export class FunctionalObjectiveCommentMasterUI extends MasterModal<FunctionalObjectiveComment> {

  constructor(private functionalObjectiveCommentService: FunctionalObjectiveCommentService) {
    super(functionalObjectiveCommentService);
  }
}