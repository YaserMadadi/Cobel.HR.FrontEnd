import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { EmployeeEvent } from '../employeeEvent';
import { EmployeeEventService } from '../employeeEvent.service';


@Component({
  selector: 'hr-employeeEvent-delete',
  templateUrl: './employeeEvent.delete.html',
  styleUrls: ['./employeeEvent.delete.css'],
  
})
export class EmployeeEventDeleteUI extends DeleteModal<EmployeeEvent> {

    constructor(private employeeEventService: EmployeeEventService){
        super(employeeEventService);
    }

}