import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { LogService } from './log.service';
import { LogServiceCollection } from './log.service.collection';
import { LogMasterUI } from './master/log.master';
import { Log_ModuleDetail } from './log.module.detail';

@NgModule({
    declarations: [
        LogMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Log_ModuleDetail
    ],
    exports: [
        LogMasterUI
    ],
    providers: [
        //LogService,
       // LogServiceCollection   
    ]
})

export class Log_ModuleMaster { }