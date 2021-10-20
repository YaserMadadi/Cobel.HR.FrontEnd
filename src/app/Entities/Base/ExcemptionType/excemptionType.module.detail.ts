import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ExcemptionTypeService } from './excemptionType.service';
import { ExcemptionTypeServiceCollection } from './excemptionType.service.collection';


import { ExcemptionType_MilitaryServiceExcemption_DetailUI } from './detail/excemptionType-militaryServiceExcemption.detail';
import { MilitaryServiceExcemption_ModuleMaster } from '../../HR/MilitaryServiceExcemption/militaryServiceExcemption.module.master';

@NgModule({
  declarations: [
    ExcemptionType_MilitaryServiceExcemption_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		MilitaryServiceExcemption_ModuleMaster,
  ],
  exports: [
    ExcemptionType_MilitaryServiceExcemption_DetailUI
  ]
})
export class ExcemptionType_ModuleDetail { }