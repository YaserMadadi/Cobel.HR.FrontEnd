import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FunctionalKPIService } from './functionalKPI.service';
import { FunctionalKPIServiceCollection } from './functionalKPI.service.collection';

import { FunctionalKPIIndexUI } from './index/functionalKPI.index';
import { FunctionalKPI_ModuleFunc } from './functionalKPI.module.func';
import { FunctionalKPI_ModuleMaster } from './functionalKPI.module.master';


import { FunctionalAppraise_ModuleFunc } from '../FunctionalAppraise/functionalAppraise.module.func';
import { FunctionalAppraise_ModuleMaster } from '../FunctionalAppraise/functionalAppraise.module.master';
import { FunctionalKPIComment_ModuleFunc } from '../FunctionalKPIComment/functionalKPIComment.module.func';
import { FunctionalKPIComment_ModuleMaster } from '../FunctionalKPIComment/functionalKPIComment.module.master';

@NgModule({
  declarations: [
    FunctionalKPIIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FunctionalKPI_ModuleMaster,
		FunctionalAppraise_ModuleMaster,
		FunctionalKPIComment_ModuleMaster,
  ],
  exports: [
    FunctionalKPIIndexUI,
		FunctionalKPI_ModuleMaster,
  ],
  providers: [
    // FunctionalKPIService,
    // FunctionalKPIServiceCollection
  ]
})
export class FunctionalKPIModule {}