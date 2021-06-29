import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ImpersonateService } from './impersonate.service';
import { ImpersonateServiceCollection } from './impersonate.service.collection';
import { ImpersonateMasterUI } from './master/impersonate.master';
import { Impersonate_ModuleDetail } from './impersonate.module.detail';

@NgModule({
    declarations: [
        ImpersonateMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Impersonate_ModuleDetail
    ],
    exports: [
        ImpersonateMasterUI
    ],
    providers: [
        //ImpersonateService,
       // ImpersonateServiceCollection   
    ]
})

export class Impersonate_ModuleMaster { }