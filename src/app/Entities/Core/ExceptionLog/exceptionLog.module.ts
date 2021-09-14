
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ExceptionLogService } from './exceptionLog.service';
import { ExceptionLogServiceCollection } from './exceptionLog.service.collection';

import { ExceptionLogIndexUI } from './index/exceptionLog.index';
import { ExceptionLog_ModuleFunc } from './exceptionLog.module.func';
import { ExceptionLog_ModuleMaster } from './exceptionLog.module.master';


import { CommandParameter_ModuleFunc } from '../CommandParameter/commandParameter.module.func';
import { CommandParameter_ModuleMaster } from '../CommandParameter/commandParameter.module.master';

@NgModule({
  declarations: [
    ExceptionLogIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ExceptionLog_ModuleMaster,
		CommandParameter_ModuleMaster,
  ],
  exports: [
    ExceptionLogIndexUI,
		ExceptionLog_ModuleMaster,
  ],
  providers: [
    // ExceptionLogService,
    // ExceptionLogServiceCollection
  ]
})
export class ExceptionLogModule {}