import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { QuestionaryItem } from '../questionaryItem';
import { QuestionaryItemService } from '../questionaryItem.service';


@Component({
  selector: 'lad-questionaryItem-delete',
  templateUrl: './questionaryItem.delete.html',
  styleUrls: ['./questionaryItem.delete.css'],
  
})
export class QuestionaryItemDeleteUI extends DeleteModal<QuestionaryItem> {

    constructor(private questionaryItemService: QuestionaryItemService){
        super(questionaryItemService);
    }

}