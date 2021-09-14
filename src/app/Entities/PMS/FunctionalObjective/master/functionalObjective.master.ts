import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FunctionalObjective } from '../functionalObjective';
import { FunctionalObjectiveService } from '../functionalObjective.service';
import { FunctionalObjectiveDeleteUI } from '../delete/functionalObjective.delete';
import { FunctionalObjectiveEditUI } from '../edit/functionalObjective.edit';
import { FunctionalObjectiveCommentService } from '../../FunctionalObjectiveComment/functionalObjectiveComment.service';
import { FunctionalKPIService } from '../../FunctionalKPI/functionalKPI.service';



@Component({
  selector: 'pms-functionalObjective-master',
  templateUrl: './functionalObjective.master.html',
  styleUrls: ['./functionalObjective.master.css']
})
export class FunctionalObjectiveMasterUI extends MasterModal<FunctionalObjective> {

  constructor(private functionalObjectiveService: FunctionalObjectiveService) {
    super(functionalObjectiveService);
  }
}