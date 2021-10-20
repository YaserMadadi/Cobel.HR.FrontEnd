import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConclusionTypeService } from './conclusionType.service';
import { ConclusionTypeServiceCollection } from './conclusionType.service.collection';


import { ConclusionType_Conclusion_DetailUI } from './detail/conclusionType-conclusion.detail';
import { Conclusion_ModuleMaster } from '../Conclusion/conclusion.module.master';

@NgModule({
  declarations: [
    ConclusionType_Conclusion_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Conclusion_ModuleMaster,
  ],
  exports: [
    ConclusionType_Conclusion_DetailUI
  ],
  
})
export class ConclusionType_ModuleDetail { }