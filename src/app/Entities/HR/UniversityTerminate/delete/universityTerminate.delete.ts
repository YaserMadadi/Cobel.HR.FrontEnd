import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { UniversityTerminate } from '../universityTerminate';
import { UniversityTerminateService } from '../universityTerminate.service';


@Component({
  selector: 'hr-universityTerminate-delete',
  templateUrl: './universityTerminate.delete.html',
  styleUrls: ['./universityTerminate.delete.css'],
  
})
export class UniversityTerminateDeleteUI extends DeleteModal<UniversityTerminate> {

    constructor(private universityTerminateService: UniversityTerminateService){
        super(universityTerminateService);
    }

}