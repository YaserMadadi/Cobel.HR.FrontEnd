import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CoachingQuestionaryAnswered } from '../coachingQuestionaryAnswered';
import { CoachingQuestionaryAnsweredService } from '../coachingQuestionaryAnswered.service';


@Component({
  selector: 'lad-coachingQuestionaryAnswered-delete',
  templateUrl: './coachingQuestionaryAnswered.delete.html',
  styleUrls: ['./coachingQuestionaryAnswered.delete.css'],
  providers: [CoachingQuestionaryAnsweredService]
})
export class CoachingQuestionaryAnsweredDeleteUI extends DeleteModal<CoachingQuestionaryAnswered> {

    constructor(private coachingQuestionaryAnsweredService: CoachingQuestionaryAnsweredService){
        super(coachingQuestionaryAnsweredService);
    }

}