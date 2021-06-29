import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { University } from '../university';
import { UniversityService } from '../university.service';


@Component({
  selector: 'base-university-delete',
  templateUrl: './university.delete.html',
  styleUrls: ['./university.delete.css'],
  providers: [UniversityService]
})
export class UniversityDeleteUI extends DeleteModal<University> {

    constructor(private universityService: UniversityService){
        super(universityService);
    }

}