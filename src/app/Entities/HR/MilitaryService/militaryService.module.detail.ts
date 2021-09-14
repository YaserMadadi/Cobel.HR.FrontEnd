import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceService } from './militaryService.service';
import { MilitaryServiceServiceCollection } from './militaryService.service.collection';


import { MilitaryService_MilitaryServiceExcemption_DetailUI } from './detail/militaryService-militaryServiceExcemption.detail';
import { MilitaryServiceExcemption_ModuleMaster } from '../MilitaryServiceExcemption/militaryServiceExcemption.module.master';
import { MilitaryService_MilitaryServiceInclusive_DetailUI } from './detail/militaryService-militaryServiceInclusive.detail';
import { MilitaryServiceInclusive_ModuleMaster } from '../MilitaryServiceInclusive/militaryServiceInclusive.module.master';

@NgModule({
  declarations: [
    MilitaryService_MilitaryServiceExcemption_DetailUI,
		MilitaryService_MilitaryServiceInclusive_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		MilitaryServiceExcemption_ModuleMaster,
		MilitaryServiceInclusive_ModuleMaster,
  ],
  exports: [
    MilitaryService_MilitaryServiceExcemption_DetailUI,
		MilitaryService_MilitaryServiceInclusive_DetailUI
  ],
  
})
export class MilitaryService_ModuleDetail { }