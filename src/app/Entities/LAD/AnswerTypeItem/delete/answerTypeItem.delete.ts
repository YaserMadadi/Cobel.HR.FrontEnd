import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AnswerTypeItem } from '../answerTypeItem';
import { AnswerTypeItemService } from '../answerTypeItem.service';


@Component({
  selector: 'lad-answerTypeItem-delete',
  templateUrl: './answerTypeItem.delete.html',
  styleUrls: ['./answerTypeItem.delete.css'],
  providers: [AnswerTypeItemService]
})
export class AnswerTypeItemDeleteUI extends DeleteModal<AnswerTypeItem> {

    constructor(private answerTypeItemService: AnswerTypeItemService){
        super(answerTypeItemService);
    }

}