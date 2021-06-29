import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { StrategicObjectveService } from './strategicObjectve.service';
import { StrategicObjectveServiceCollection } from './strategicObjectve.service.collection';

import { StrategicObjectveIndexUI } from './index/strategicObjectve.index';
import { StrategicObjectve_ModuleFunc } from './strategicObjectve.module.func';
import { StrategicObjectve_ModuleMaster } from './strategicObjectve.module.master';



@NgModule({
  declarations: [
    StrategicObjectveIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    StrategicObjectve_ModuleMaster,
  ],
  exports: [
    StrategicObjectveIndexUI,
		StrategicObjectve_ModuleMaster,
  ],
  providers: [
    // StrategicObjectveService,
    // StrategicObjectveServiceCollection
  ]
})
export class StrategicObjectveModule {}