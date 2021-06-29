import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CompetencyItemKPIService } from './competencyItemKPI.service';
import { CompetencyItemKPIServiceCollection } from './competencyItemKPI.service.collection';

import { CompetencyItemKPIIndexUI } from './index/competencyItemKPI.index';
import { CompetencyItemKPI_ModuleFunc } from './competencyItemKPI.module.func';
import { CompetencyItemKPI_ModuleMaster } from './competencyItemKPI.module.master';


import { BehavioralKPI_ModuleFunc } from '../BehavioralKPI/behavioralKPI.module.func';
import { BehavioralKPI_ModuleMaster } from '../BehavioralKPI/behavioralKPI.module.master';

@NgModule({
  declarations: [
    CompetencyItemKPIIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CompetencyItemKPI_ModuleMaster,
		BehavioralKPI_ModuleMaster,
  ],
  exports: [
    CompetencyItemKPIIndexUI,
		CompetencyItemKPI_ModuleMaster,
  ],
  providers: [
    // CompetencyItemKPIService,
    // CompetencyItemKPIServiceCollection
  ]
})
export class CompetencyItemKPIModule {}