import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { UniversityDegree } from '../universityDegree';
import { UniversityDegreeService } from '../universityDegree.service';


@Component({
  selector: 'base-universityDegree-delete',
  templateUrl: './universityDegree.delete.html',
  styleUrls: ['./universityDegree.delete.css'],
  
})
export class UniversityDegreeDeleteUI extends DeleteModal<UniversityDegree> {

    constructor(private universityDegreeService: UniversityDegreeService){
        super(universityDegreeService);
    }

}