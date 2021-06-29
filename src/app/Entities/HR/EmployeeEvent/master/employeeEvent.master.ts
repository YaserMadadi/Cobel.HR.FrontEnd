import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { EmployeeEvent } from '../employeeEvent';
import { EmployeeEventService } from '../employeeEvent.service';
import { EmployeeEventDeleteUI } from '../delete/employeeEvent.delete';
import { EmployeeEventEditUI } from '../edit/employeeEvent.edit';



@Component({
  selector: 'hr-employeeEvent-master',
  templateUrl: './employeeEvent.master.html',
  styleUrls: ['./employeeEvent.master.css'],
  providers: [
    EmployeeEventService,
    
  ]
})
export class EmployeeEventMasterUI extends MasterModal<EmployeeEvent> {

  constructor(private employeeEventService: EmployeeEventService) {
    super(employeeEventService);
  }
}