import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Assessor } from '../assessor';
import { AssessorService } from '../assessor.service';


@Component({
  selector: 'lad-assessor-delete',
  templateUrl: './assessor.delete.html',
  styleUrls: ['./assessor.delete.css'],
  
})
export class AssessorDeleteUI extends DeleteModal<Assessor> {

    constructor(private assessorService: AssessorService){
        super(assessorService);
    }

}