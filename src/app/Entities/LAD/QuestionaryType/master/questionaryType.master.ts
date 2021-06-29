import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { QuestionaryType } from '../questionaryType';
import { QuestionaryTypeService } from '../questionaryType.service';
import { QuestionaryTypeDeleteUI } from '../delete/questionaryType.delete';
import { QuestionaryTypeEditUI } from '../edit/questionaryType.edit';
import { CoachingQuestionaryService } from '../../CoachingQuestionary/coachingQuestionary.service';
import { QuestionaryItemService } from '../../QuestionaryItem/questionaryItem.service';



@Component({
  selector: 'lad-questionaryType-master',
  templateUrl: './questionaryType.master.html',
  styleUrls: ['./questionaryType.master.css'],
  providers: [
    QuestionaryTypeService,
    CoachingQuestionaryService,
		QuestionaryItemService,
  ]
})
export class QuestionaryTypeMasterUI extends MasterModal<QuestionaryType> {

  constructor(private questionaryTypeService: QuestionaryTypeService) {
    super(questionaryTypeService);
  }
}