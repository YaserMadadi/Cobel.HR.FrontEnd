import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmployeeEventService } from './employeeEvent.service';
import { EmployeeEventServiceCollection } from './employeeEvent.service.collection';



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
  
})
export class EmployeeEvent_ModuleDetail { }