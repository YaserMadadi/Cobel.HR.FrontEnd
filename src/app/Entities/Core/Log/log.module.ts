import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { LogService } from './log.service';
import { LogServiceCollection } from './log.service.collection';

import { LogIndexUI } from './index/log.index';
import { Log_ModuleFunc } from './log.module.func';
import { Log_ModuleMaster } from './log.module.master';



@NgModule({
  declarations: [
    LogIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Log_ModuleMaster,
  ],
  exports: [
    LogIndexUI,
		Log_ModuleMaster,
   ]
})
export class LogModule {}