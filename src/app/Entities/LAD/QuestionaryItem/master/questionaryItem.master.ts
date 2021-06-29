import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { QuestionaryItem } from '../questionaryItem';
import { QuestionaryItemService } from '../questionaryItem.service';
import { QuestionaryItemDeleteUI } from '../delete/questionaryItem.delete';
import { QuestionaryItemEditUI } from '../edit/questionaryItem.edit';
import { CoachingQuestionaryAnsweredService } from '../../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.service';



@Component({
  selector: 'lad-questionaryItem-master',
  templateUrl: './questionaryItem.master.html',
  styleUrls: ['./questionaryItem.master.css'],
  providers: [
    QuestionaryItemService,
    CoachingQuestionaryAnsweredService,
  ]
})
export class QuestionaryItemMasterUI extends MasterModal<QuestionaryItem> {

  constructor(private questionaryItemService: QuestionaryItemService) {
    super(questionaryItemService);
  }
}