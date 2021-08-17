
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EventTypeService } from './eventType.service';
import { EventTypeServiceCollection } from './eventType.service.collection';

import { EventTypeIndexUI } from './index/eventType.index';
import { EventType_ModuleFunc } from './eventType.module.func';
import { EventType_ModuleMaster } from './eventType.module.master';


import { EmployeeEvent_ModuleFunc } from '../../HR/EmployeeEvent/employeeEvent.module.func';
import { EmployeeEvent_ModuleMaster } from '../../HR/EmployeeEvent/employeeEvent.module.master';

@NgModule({
  declarations: [
    EventTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    EventType_ModuleMaster,
		EmployeeEvent_ModuleMaster,
  ],
  exports: [
    EventTypeIndexUI,
		EventType_ModuleMaster,
  ],
  providers: [
    // EventTypeService,
    // EventTypeServiceCollection
  ]
})
export class EventTypeModule {}