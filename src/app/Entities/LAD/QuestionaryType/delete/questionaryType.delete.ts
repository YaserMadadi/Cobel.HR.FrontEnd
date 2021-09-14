import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { QuestionaryType } from '../questionaryType';
import { QuestionaryTypeService } from '../questionaryType.service';


@Component({
  selector: 'lad-questionaryType-delete',
  templateUrl: './questionaryType.delete.html',
  styleUrls: ['./questionaryType.delete.css'],
  
})
export class QuestionaryTypeDeleteUI extends DeleteModal<QuestionaryType> {

    constructor(private questionaryTypeService: QuestionaryTypeService){
        super(questionaryTypeService);
    }

}