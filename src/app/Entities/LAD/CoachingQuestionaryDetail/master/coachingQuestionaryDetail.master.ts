import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CoachingQuestionaryDetail } from '../coachingQuestionaryDetail';
import { CoachingQuestionaryDetailService } from '../coachingQuestionaryDetail.service';
import { CoachingQuestionaryDetailDeleteUI } from '../delete/coachingQuestionaryDetail.delete';
import { CoachingQuestionaryDetailEditUI } from '../edit/coachingQuestionaryDetail.edit';



@Component({
  selector: 'lad-coachingQuestionaryDetail-master',
  templateUrl: './coachingQuestionaryDetail.master.html',
  styleUrls: ['./coachingQuestionaryDetail.master.css'],
  providers: [
    CoachingQuestionaryDetailService,
    
  ]
})
export class CoachingQuestionaryDetailMasterUI extends MasterModal<CoachingQuestionaryDetail> {

  constructor(private coachingQuestionaryDetailService: CoachingQuestionaryDetailService) {
    super(coachingQuestionaryDetailService);
  }
}