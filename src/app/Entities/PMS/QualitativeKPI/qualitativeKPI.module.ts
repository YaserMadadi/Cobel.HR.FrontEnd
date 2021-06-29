import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { QualitativeKPIService } from './qualitativeKPI.service';
import { QualitativeKPIServiceCollection } from './qualitativeKPI.service.collection';

import { QualitativeKPIIndexUI } from './index/qualitativeKPI.index';
import { QualitativeKPI_ModuleFunc } from './qualitativeKPI.module.func';
import { QualitativeKPI_ModuleMaster } from './qualitativeKPI.module.master';


import { QualitativeAppraise_ModuleFunc } from '../QualitativeAppraise/qualitativeAppraise.module.func';
import { QualitativeAppraise_ModuleMaster } from '../QualitativeAppraise/qualitativeAppraise.module.master';

@NgModule({
  declarations: [
    QualitativeKPIIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    QualitativeKPI_ModuleMaster,
		QualitativeAppraise_ModuleMaster,
  ],
  exports: [
    QualitativeKPIIndexUI,
		QualitativeKPI_ModuleMaster,
  ],
  providers: [
    // QualitativeKPIService,
    // QualitativeKPIServiceCollection
  ]
})
export class QualitativeKPIModule {}