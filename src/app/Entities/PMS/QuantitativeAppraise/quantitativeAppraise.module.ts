import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { QuantitativeAppraiseService } from './quantitativeAppraise.service';
import { QuantitativeAppraiseServiceCollection } from './quantitativeAppraise.service.collection';

import { QuantitativeAppraiseIndexUI } from './index/quantitativeAppraise.index';
import { QuantitativeAppraise_ModuleFunc } from './quantitativeAppraise.module.func';
import { QuantitativeAppraise_ModuleMaster } from './quantitativeAppraise.module.master';



@NgModule({
  declarations: [
    QuantitativeAppraiseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    QuantitativeAppraise_ModuleMaster,
  ],
  exports: [
    QuantitativeAppraiseIndexUI,
		QuantitativeAppraise_ModuleMaster,
  ],
  providers: [
    // QuantitativeAppraiseService,
    // QuantitativeAppraiseServiceCollection
  ]
})
export class QuantitativeAppraiseModule {}