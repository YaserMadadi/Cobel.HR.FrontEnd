import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ExceptionLogService } from './exceptionLog.service';
import { ExceptionLogServiceCollection } from './exceptionLog.service.collection';
import { ExceptionLogMasterUI } from './master/exceptionLog.master';
import { ExceptionLog_ModuleDetail } from './exceptionLog.module.detail';

@NgModule({
    declarations: [
        ExceptionLogMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ExceptionLog_ModuleDetail
    ],
    exports: [
        ExceptionLogMasterUI
    ],
    providers: [
        //ExceptionLogService,
       // ExceptionLogServiceCollection   
    ]
})

export class ExceptionLog_ModuleMaster { }