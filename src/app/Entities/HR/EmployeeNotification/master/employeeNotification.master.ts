import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { EmployeeNotification } from '../employeeNotification';
import { EmployeeNotificationService } from '../employeeNotification.service';
import { EmployeeNotificationDeleteUI } from '../delete/employeeNotification.delete';
import { EmployeeNotificationEditUI } from '../edit/employeeNotification.edit';



@Component({
  selector: 'hr-employeeNotification-master',
  templateUrl: './employeeNotification.master.html',
  styleUrls: ['./employeeNotification.master.css'],
  providers: [
    EmployeeNotificationService,
    
  ]
})
export class EmployeeNotificationMasterUI extends MasterModal<EmployeeNotification> {

  constructor(private employeeNotificationService: EmployeeNotificationService) {
    super(employeeNotificationService);
  }
}