import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ConfigQualitativeKPIService } from './configQualitativeKPI.service';
import { ConfigQualitativeKPIServiceCollection } from './configQualitativeKPI.service.collection';

import { ConfigQualitativeKPIIndexUI } from './index/configQualitativeKPI.index';
import { ConfigQualitativeKPI_ModuleFunc } from './configQualitativeKPI.module.func';
import { ConfigQualitativeKPI_ModuleMaster } from './configQualitativeKPI.module.master';



@NgModule({
  declarations: [
    ConfigQualitativeKPIIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ConfigQualitativeKPI_ModuleMaster,
  ],
  exports: [
    ConfigQualitativeKPIIndexUI,
		ConfigQualitativeKPI_ModuleMaster,
  ],
  providers: [
    // ConfigQualitativeKPIService,
    // ConfigQualitativeKPIServiceCollection
  ]
})
export class ConfigQualitativeKPIModule {}