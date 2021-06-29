import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Assessor } from '../assessor';
import { AssessorService } from '../assessor.service';
import { AssessorDeleteUI } from '../delete/assessor.delete';
import { AssessorEditUI } from '../edit/assessor.edit';
import { AssessorConnectionLineService } from '../../AssessorConnectionLine/assessorConnectionLine.service';
import { AssessmentService } from '../../Assessment/assessment.service';



@Component({
  selector: 'lad-assessor-master',
  templateUrl: './assessor.master.html',
  styleUrls: ['./assessor.master.css'],
  providers: [
    AssessorService,
    AssessorConnectionLineService,
		AssessmentService,
  ]
})
export class AssessorMasterUI extends MasterModal<Assessor> {

  constructor(private assessorService: AssessorService) {
    super(assessorService);
  }
}