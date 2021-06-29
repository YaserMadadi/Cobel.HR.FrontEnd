import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { LogService } from './log.service';
import { LogServiceCollection } from './log.service.collection';
import { LogMasterUI } from './master/log.master';
import { LogEditUI } from './edit/log.edit';
import { LogDeleteUI } from './delete/log.delete';
import { LogSeekUI } from './seek/log.seek';

import { Person_ModuleFunc } from '../../HR/Person/person.module.func';

@NgModule({
    declarations: [
        LogEditUI,
		LogDeleteUI,
		LogSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc
    ],
    exports: [
        LogEditUI,
		LogDeleteUI,
		LogSeekUI
    ],
    providers: [
       //LogService,
       // LogServiceCollection,
    ]
})

export class Log_ModuleFunc { }