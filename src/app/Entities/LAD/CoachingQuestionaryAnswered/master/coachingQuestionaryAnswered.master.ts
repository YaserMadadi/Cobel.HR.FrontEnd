import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CoachingQuestionaryAnswered } from '../coachingQuestionaryAnswered';
import { CoachingQuestionaryAnsweredService } from '../coachingQuestionaryAnswered.service';
import { CoachingQuestionaryAnsweredDeleteUI } from '../delete/coachingQuestionaryAnswered.delete';
import { CoachingQuestionaryAnsweredEditUI } from '../edit/coachingQuestionaryAnswered.edit';



@Component({
  selector: 'lad-coachingQuestionaryAnswered-master',
  templateUrl: './coachingQuestionaryAnswered.master.html',
  styleUrls: ['./coachingQuestionaryAnswered.master.css']
})
export class CoachingQuestionaryAnsweredMasterUI extends MasterModal<CoachingQuestionaryAnswered> {

  constructor(private coachingQuestionaryAnsweredService: CoachingQuestionaryAnsweredService) {
    super(coachingQuestionaryAnsweredService);
  }
}