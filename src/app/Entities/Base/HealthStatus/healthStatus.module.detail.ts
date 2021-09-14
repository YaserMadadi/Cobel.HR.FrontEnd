import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HealthStatusService } from './healthStatus.service';
import { HealthStatusServiceCollection } from './healthStatus.service.collection';


import { HealthStatus_Person_DetailUI } from './detail/healthStatus-person.detail';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    HealthStatus_Person_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Person_ModuleMaster,
  ],
  exports: [
    HealthStatus_Person_DetailUI
  ]
})
export class HealthStatus_ModuleDetail { }