
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EventTypeService } from './eventType.service';
import { EventTypeServiceCollection } from './eventType.service.collection';


import { EventType_EmployeeEvent_DetailUI } from './detail/eventType-employeeEvent.detail';
import { EmployeeEvent_ModuleMaster } from '../../HR/EmployeeEvent/employeeEvent.module.master';

@NgModule({
  declarations: [
    EventType_EmployeeEvent_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		EmployeeEvent_ModuleMaster,
  ],
  exports: [
    EventType_EmployeeEvent_DetailUI
  ],
  providers: [
    //EventTypeService,
    //EventTypeServiceCollection
  ]
})
export class EventType_ModuleDetail { }