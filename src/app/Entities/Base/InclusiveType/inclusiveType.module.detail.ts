import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { InclusiveTypeService } from './inclusiveType.service';
import { InclusiveTypeServiceCollection } from './inclusiveType.service.collection';


import { InclusiveType_MilitaryServiceInclusive_DetailUI } from './detail/inclusiveType-militaryServiceInclusive.detail';
import { MilitaryServiceInclusive_ModuleMaster } from '../../HR/MilitaryServiceInclusive/militaryServiceInclusive.module.master';

@NgModule({
  declarations: [
    InclusiveType_MilitaryServiceInclusive_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		MilitaryServiceInclusive_ModuleMaster,
  ],
  exports: [
    InclusiveType_MilitaryServiceInclusive_DetailUI
  ]
})
export class InclusiveType_ModuleDetail { }