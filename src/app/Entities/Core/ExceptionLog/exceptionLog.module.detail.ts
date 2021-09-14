
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ExceptionLogService } from './exceptionLog.service';
import { ExceptionLogServiceCollection } from './exceptionLog.service.collection';


import { ExceptionLog_CommandParameter_DetailUI } from './detail/exceptionLog-commandParameter.detail';
import { CommandParameter_ModuleMaster } from '../CommandParameter/commandParameter.module.master';

@NgModule({
  declarations: [
    ExceptionLog_CommandParameter_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CommandParameter_ModuleMaster,
  ],
  exports: [
    ExceptionLog_CommandParameter_DetailUI
  ],
  providers: [
    //ExceptionLogService,
    //ExceptionLogServiceCollection
  ]
})
export class ExceptionLog_ModuleDetail { }