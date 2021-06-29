import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CoachingQuestionaryDetail } from '../coachingQuestionaryDetail';
import { CoachingQuestionaryDetailService } from '../coachingQuestionaryDetail.service';


@Component({
  selector: 'lad-coachingQuestionaryDetail-delete',
  templateUrl: './coachingQuestionaryDetail.delete.html',
  styleUrls: ['./coachingQuestionaryDetail.delete.css'],
  providers: [CoachingQuestionaryDetailService]
})
export class CoachingQuestionaryDetailDeleteUI extends DeleteModal<CoachingQuestionaryDetail> {

    constructor(private coachingQuestionaryDetailService: CoachingQuestionaryDetailService){
        super(coachingQuestionaryDetailService);
    }

}