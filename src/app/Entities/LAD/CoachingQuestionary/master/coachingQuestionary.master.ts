import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CoachingQuestionary } from '../coachingQuestionary';
import { CoachingQuestionaryService } from '../coachingQuestionary.service';
import { CoachingQuestionaryDeleteUI } from '../delete/coachingQuestionary.delete';
import { CoachingQuestionaryEditUI } from '../edit/coachingQuestionary.edit';
import { CoachingQuestionaryDetailService } from '../../CoachingQuestionaryDetail/coachingQuestionaryDetail.service';
import { CoachingQuestionaryAnsweredService } from '../../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.service';



@Component({
  selector: 'lad-coachingQuestionary-master',
  templateUrl: './coachingQuestionary.master.html',
  styleUrls: ['./coachingQuestionary.master.css'],
  providers: [
    CoachingQuestionaryService,
    CoachingQuestionaryDetailService,
		CoachingQuestionaryAnsweredService,
  ]
})
export class CoachingQuestionaryMasterUI extends MasterModal<CoachingQuestionary> {

  constructor(private coachingQuestionaryService: CoachingQuestionaryService) {
    super(coachingQuestionaryService);
  }
}