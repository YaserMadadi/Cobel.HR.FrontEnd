import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CommandParameterService } from './commandParameter.service';
import { CommandParameterServiceCollection } from './commandParameter.service.collection';
import { CommandParameterMasterUI } from './master/commandParameter.master';
import { CommandParameterEditUI } from './edit/commandParameter.edit';
import { CommandParameterDeleteUI } from './delete/commandParameter.delete';
import { CommandParameterSeekUI } from './seek/commandParameter.seek';

import { ExceptionLog_ModuleFunc } from '../ExceptionLog/exceptionLog.module.func';

@NgModule({
    declarations: [
        CommandParameterEditUI,
		CommandParameterDeleteUI,
		CommandParameterSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        ExceptionLog_ModuleFunc
    ],
    exports: [
        CommandParameterEditUI,
		CommandParameterDeleteUI,
		CommandParameterSeekUI
    ],
    providers: [
       //CommandParameterService,
       // CommandParameterServiceCollection,
    ]
})

export class CommandParameter_ModuleFunc { }
