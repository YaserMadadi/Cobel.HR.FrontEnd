import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AnswerType } from '../answerType';
import { AnswerTypeService } from '../answerType.service';


@Component({
  selector: 'lad-answerType-delete',
  templateUrl: './answerType.delete.html',
  styleUrls: ['./answerType.delete.css'],
  
})
export class AnswerTypeDeleteUI extends DeleteModal<AnswerType> {

    constructor(private answerTypeService: AnswerTypeService){
        super(answerTypeService);
    }

}