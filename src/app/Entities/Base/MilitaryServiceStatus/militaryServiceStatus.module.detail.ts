import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceStatusService } from './militaryServiceStatus.service';
import { MilitaryServiceStatusServiceCollection } from './militaryServiceStatus.service.collection';


import { MilitaryServiceStatus_MilitaryService_DetailUI } from './detail/militaryServiceStatus-militaryService.detail';
import { MilitaryService_ModuleMaster } from '../../HR/MilitaryService/militaryService.module.master';

@NgModule({
  declarations: [
    MilitaryServiceStatus_MilitaryService_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		MilitaryService_ModuleMaster,
  ],
  exports: [
    MilitaryServiceStatus_MilitaryService_DetailUI
  ]
})
export class MilitaryServiceStatus_ModuleDetail { }