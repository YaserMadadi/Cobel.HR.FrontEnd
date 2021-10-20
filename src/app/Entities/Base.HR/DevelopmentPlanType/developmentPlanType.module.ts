
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { DevelopmentPlanTypeService } from './developmentPlanType.service';
import { DevelopmentPlanTypeServiceCollection } from './developmentPlanType.service.collection';

import { DevelopmentPlanTypeIndexUI } from './index/developmentPlanType.index';
import { DevelopmentPlanType_ModuleFunc } from './developmentPlanType.module.func';
import { DevelopmentPlanType_ModuleMaster } from './developmentPlanType.module.master';



@NgModule({
  declarations: [
    DevelopmentPlanTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    DevelopmentPlanType_ModuleMaster,
  ],
  exports: [
    DevelopmentPlanTypeIndexUI,
		DevelopmentPlanType_ModuleMaster,
   ]
})
export class DevelopmentPlanTypeModule {}