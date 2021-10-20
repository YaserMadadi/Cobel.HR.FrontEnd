import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Subject } from '../subject';
import { SubjectService } from '../subject.service';


@Component({
  selector: 'base-pms-subject-delete',
  templateUrl: './subject.delete.html',
  styleUrls: ['./subject.delete.css'],
  
})
export class SubjectDeleteUI extends DeleteModal<Subject> {

    constructor(private subjectService: SubjectService){
        super(subjectService);
    }

}