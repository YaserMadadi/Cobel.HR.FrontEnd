import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { EmployeeNotification } from '../employeeNotification';
import { EmployeeNotificationService } from '../employeeNotification.service';


@Component({
  selector: 'hr-employeeNotification-delete',
  templateUrl: './employeeNotification.delete.html',
  styleUrls: ['./employeeNotification.delete.css'],
  
})
export class EmployeeNotificationDeleteUI extends DeleteModal<EmployeeNotification> {

    constructor(private employeeNotificationService: EmployeeNotificationService){
        super(employeeNotificationService);
    }

}