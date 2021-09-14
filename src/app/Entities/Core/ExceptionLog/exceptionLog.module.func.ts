import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ExceptionLogService } from './exceptionLog.service';
import { ExceptionLogServiceCollection } from './exceptionLog.service.collection';
import { ExceptionLogMasterUI } from './master/exceptionLog.master';
import { ExceptionLogEditUI } from './edit/exceptionLog.edit';
import { ExceptionLogDeleteUI } from './delete/exceptionLog.delete';
import { ExceptionLogSeekUI } from './seek/exceptionLog.seek';


@NgModule({
    declarations: [
        ExceptionLogEditUI,
		ExceptionLogDeleteUI,
		ExceptionLogSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ExceptionLogEditUI,
		ExceptionLogDeleteUI,
		ExceptionLogSeekUI
    ],
    providers: [
       //ExceptionLogService,
       // ExceptionLogServiceCollection,
    ]
})

export class ExceptionLog_ModuleFunc { }
