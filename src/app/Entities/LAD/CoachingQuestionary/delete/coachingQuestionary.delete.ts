import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CoachingQuestionary } from '../coachingQuestionary';
import { CoachingQuestionaryService } from '../coachingQuestionary.service';


@Component({
  selector: 'lad-coachingQuestionary-delete',
  templateUrl: './coachingQuestionary.delete.html',
  styleUrls: ['./coachingQuestionary.delete.css'],
  providers: [CoachingQuestionaryService]
})
export class CoachingQuestionaryDeleteUI extends DeleteModal<CoachingQuestionary> {

    constructor(private coachingQuestionaryService: CoachingQuestionaryService){
        super(coachingQuestionaryService);
    }

}