import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalObjectiveService } from './functionalObjective.service';
import { FunctionalObjectiveServiceCollection } from './functionalObjective.service.collection';


import { FunctionalObjective_FunctionalKPI_DetailUI } from './detail/functionalObjective-functionalKPI.detail';
import { FunctionalKPI_ModuleMaster } from '../FunctionalKPI/functionalKPI.module.master';
import { FunctionalObjective_ChildFunctionalObjective_DetailUI } from './detail/functionalObjective-childFunctionalObjective.detail';
import { FunctionalObjective_ModuleMaster } from '../FunctionalObjective/functionalObjective.module.master';
import { FunctionalObjective_FunctionalObjectiveComment_DetailUI } from './detail/functionalObjective-functionalObjectiveComment.detail';
import { FunctionalObjectiveComment_ModuleMaster } from '../FunctionalObjectiveComment/functionalObjectiveComment.module.master';

@NgModule({
  declarations: [
    FunctionalObjective_FunctionalKPI_DetailUI,
		FunctionalObjective_ChildFunctionalObjective_DetailUI,
		FunctionalObjective_FunctionalObjectiveComment_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		FunctionalKPI_ModuleMaster,
		//FunctionalObjective_ModuleMaster,
		FunctionalObjectiveComment_ModuleMaster,
  ],
  exports: [
    FunctionalObjective_FunctionalKPI_DetailUI,
		FunctionalObjective_ChildFunctionalObjective_DetailUI,
		FunctionalObjective_FunctionalObjectiveComment_DetailUI
  ],
  
})
export class FunctionalObjective_ModuleDetail { }