import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalKPIService } from './functionalKPI.service';
import { FunctionalKPIServiceCollection } from './functionalKPI.service.collection';


import { FunctionalKPI_FunctionalAppraise_DetailUI } from './detail/functionalKPI-functionalAppraise.detail';
import { FunctionalAppraise_ModuleMaster } from '../FunctionalAppraise/functionalAppraise.module.master';
import { FunctionalKPI_FunctionalKPIComment_DetailUI } from './detail/functionalKPI-functionalKPIComment.detail';
import { FunctionalKPIComment_ModuleMaster } from '../FunctionalKPIComment/functionalKPIComment.module.master';

@NgModule({
  declarations: [
    FunctionalKPI_FunctionalAppraise_DetailUI,
		FunctionalKPI_FunctionalKPIComment_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		FunctionalAppraise_ModuleMaster,
		FunctionalKPIComment_ModuleMaster,
  ],
  exports: [
    FunctionalKPI_FunctionalAppraise_DetailUI,
		FunctionalKPI_FunctionalKPIComment_DetailUI
  ],
  
})
export class FunctionalKPI_ModuleDetail { }