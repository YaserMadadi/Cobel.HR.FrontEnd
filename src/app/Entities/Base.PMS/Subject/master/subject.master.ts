import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { SubjectDeleteUI } from '../delete/subject.delete';
import { SubjectEditUI } from '../edit/subject.edit';
import { IndividualDevelopmentPlanService } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.service';



@Component({
  selector: 'base-pms-subject-master',
  templateUrl: './subject.master.html',
  styleUrls: ['./subject.master.css'],
  providers: [
    SubjectService,
    IndividualDevelopmentPlanService,
  ]
})
export class SubjectMasterUI extends MasterModal<Subject> {

  constructor(private subjectService: SubjectService) {
    super(subjectService);
  }
}