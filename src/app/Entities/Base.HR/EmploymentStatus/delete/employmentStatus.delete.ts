

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { EmploymentStatus } from '../employmentStatus';
import { EmploymentStatusService } from '../employmentStatus.service';


@Component({
  selector: 'base-hr-employmentStatus-delete',
  templateUrl: './employmentStatus.delete.html',
  styleUrls: ['./employmentStatus.delete.css'],
  
})
export class EmploymentStatusDeleteUI extends DeleteModal<EmploymentStatus> {

    constructor(private employmentStatusService: EmploymentStatusService){
        super(employmentStatusService);
    }

}
