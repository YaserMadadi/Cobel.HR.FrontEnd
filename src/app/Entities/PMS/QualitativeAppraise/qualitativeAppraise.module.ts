import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { QualitativeAppraiseService } from './qualitativeAppraise.service';
import { QualitativeAppraiseServiceCollection } from './qualitativeAppraise.service.collection';

import { QualitativeAppraiseIndexUI } from './index/qualitativeAppraise.index';
import { QualitativeAppraise_ModuleFunc } from './qualitativeAppraise.module.func';
import { QualitativeAppraise_ModuleMaster } from './qualitativeAppraise.module.master';



@NgModule({
  declarations: [
    QualitativeAppraiseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    QualitativeAppraise_ModuleMaster,
  ],
  exports: [
    QualitativeAppraiseIndexUI,
		QualitativeAppraise_ModuleMaster,
  ],
  providers: [
    // QualitativeAppraiseService,
    // QualitativeAppraiseServiceCollection
  ]
})
export class QualitativeAppraiseModule {}