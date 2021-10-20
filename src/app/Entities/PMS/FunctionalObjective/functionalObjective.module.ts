import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FunctionalObjectiveService } from './functionalObjective.service';
import { FunctionalObjectiveServiceCollection } from './functionalObjective.service.collection';

import { FunctionalObjectiveIndexUI } from './index/functionalObjective.index';
import { FunctionalObjective_ModuleFunc } from './functionalObjective.module.func';
import { FunctionalObjective_ModuleMaster } from './functionalObjective.module.master';


import { FunctionalKPI_ModuleFunc } from '../FunctionalKPI/functionalKPI.module.func';
import { FunctionalKPI_ModuleMaster } from '../FunctionalKPI/functionalKPI.module.master';
import { FunctionalObjectiveComment_ModuleFunc } from '../FunctionalObjectiveComment/functionalObjectiveComment.module.func';
import { FunctionalObjectiveComment_ModuleMaster } from '../FunctionalObjectiveComment/functionalObjectiveComment.module.master';

@NgModule({
  declarations: [
    FunctionalObjectiveIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FunctionalObjective_ModuleMaster,
		FunctionalKPI_ModuleMaster,
		FunctionalObjectiveComment_ModuleMaster,
  ],
  exports: [
    FunctionalObjectiveIndexUI,
		FunctionalObjective_ModuleMaster,
   ]
})
export class FunctionalObjectiveModule {}