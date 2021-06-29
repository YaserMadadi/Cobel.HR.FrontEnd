import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AnswerType } from '../answerType';
import { AnswerTypeService } from '../answerType.service';
import { AnswerTypeDeleteUI } from '../delete/answerType.delete';
import { AnswerTypeEditUI } from '../edit/answerType.edit';
import { AnswerTypeItemService } from '../../AnswerTypeItem/answerTypeItem.service';
import { QuestionaryItemService } from '../../QuestionaryItem/questionaryItem.service';



@Component({
  selector: 'lad-answerType-master',
  templateUrl: './answerType.master.html',
  styleUrls: ['./answerType.master.css'],
  providers: [
    AnswerTypeService,
    AnswerTypeItemService,
		QuestionaryItemService,
  ]
})
export class AnswerTypeMasterUI extends MasterModal<AnswerType> {

  constructor(private answerTypeService: AnswerTypeService) {
    super(answerTypeService);
  }
}