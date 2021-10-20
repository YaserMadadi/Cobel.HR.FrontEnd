import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SubSystemService } from './subSystem.service';
import { SubSystemServiceCollection } from './subSystem.service.collection';
import { SubSystemMasterUI } from './master/subSystem.master';
import { SubSystem_ModuleDetail } from './subSystem.module.detail';

@NgModule({
    declarations: [
        SubSystemMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        SubSystem_ModuleDetail
    ],
    exports: [
        SubSystemMasterUI
    ],
    providers: [
        //SubSystemService,
       // SubSystemServiceCollection   
    ]
})

export class SubSystem_ModuleMaster { }