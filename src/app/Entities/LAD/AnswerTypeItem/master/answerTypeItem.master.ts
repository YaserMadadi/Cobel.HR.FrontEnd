import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AnswerTypeItem } from '../answerTypeItem';
import { AnswerTypeItemService } from '../answerTypeItem.service';
import { AnswerTypeItemDeleteUI } from '../delete/answerTypeItem.delete';
import { AnswerTypeItemEditUI } from '../edit/answerTypeItem.edit';



@Component({
  selector: 'lad-answerTypeItem-master',
  templateUrl: './answerTypeItem.master.html',
  styleUrls: ['./answerTypeItem.master.css'],
  providers: [
    AnswerTypeItemService,
    
  ]
})
export class AnswerTypeItemMasterUI extends MasterModal<AnswerTypeItem> {

  constructor(private answerTypeItemService: AnswerTypeItemService) {
    super(answerTypeItemService);
  }
}