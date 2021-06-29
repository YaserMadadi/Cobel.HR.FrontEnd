import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MaritalInfoService } from './maritalInfo.service';
import { MaritalInfoServiceCollection } from './maritalInfo.service.collection';

import { MaritalInfoIndexUI } from './index/maritalInfo.index';
import { MaritalInfo_ModuleFunc } from './maritalInfo.module.func';
import { MaritalInfo_ModuleMaster } from './maritalInfo.module.master';



@NgModule({
  declarations: [
    MaritalInfoIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MaritalInfo_ModuleMaster,
  ],
  exports: [
    MaritalInfoIndexUI,
		MaritalInfo_ModuleMaster,
  ],
  providers: [
    // MaritalInfoService,
    // MaritalInfoServiceCollection
  ]
})
export class MaritalInfoModule {}