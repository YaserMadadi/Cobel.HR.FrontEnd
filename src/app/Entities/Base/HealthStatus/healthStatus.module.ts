import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { HealthStatusService } from './healthStatus.service';
import { HealthStatusServiceCollection } from './healthStatus.service.collection';

import { HealthStatusIndexUI } from './index/healthStatus.index';
import { HealthStatus_ModuleFunc } from './healthStatus.module.func';
import { HealthStatus_ModuleMaster } from './healthStatus.module.master';


import { Person_ModuleFunc } from '../../HR/Person/person.module.func';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    HealthStatusIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    HealthStatus_ModuleMaster,
		Person_ModuleMaster,
  ],
  exports: [
    HealthStatusIndexUI,
		HealthStatus_ModuleMaster,
   ]
})
export class HealthStatusModule {}