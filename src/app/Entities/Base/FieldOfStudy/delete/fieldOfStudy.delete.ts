import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FieldOfStudy } from '../fieldOfStudy';
import { FieldOfStudyService } from '../fieldOfStudy.service';


@Component({
  selector: 'base-fieldOfStudy-delete',
  templateUrl: './fieldOfStudy.delete.html',
  styleUrls: ['./fieldOfStudy.delete.css'],
  providers: [FieldOfStudyService]
})
export class FieldOfStudyDeleteUI extends DeleteModal<FieldOfStudy> {

    constructor(private fieldOfStudyService: FieldOfStudyService){
        super(fieldOfStudyService);
    }

}