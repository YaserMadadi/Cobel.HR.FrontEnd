import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AssessorConnectionLine } from '../assessorConnectionLine';
import { AssessorConnectionLineService } from '../assessorConnectionLine.service';
import { AssessorConnectionLineDeleteUI } from '../delete/assessorConnectionLine.delete';
import { AssessorConnectionLineEditUI } from '../edit/assessorConnectionLine.edit';



@Component({
  selector: 'lad-assessorConnectionLine-master',
  templateUrl: './assessorConnectionLine.master.html',
  styleUrls: ['./assessorConnectionLine.master.css'],
  providers: [
    AssessorConnectionLineService,
    
  ]
})
export class AssessorConnectionLineMasterUI extends MasterModal<AssessorConnectionLine> {

  constructor(private assessorConnectionLineService: AssessorConnectionLineService) {
    super(assessorConnectionLineService);
  }
}