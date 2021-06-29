import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmployeeNotificationService } from './employeeNotification.service';
import { EmployeeNotificationServiceCollection } from './employeeNotification.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //EmployeeNotificationService,
    //EmployeeNotificationServiceCollection
  ]
})
export class EmployeeNotification_ModuleDetail { }