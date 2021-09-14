import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { GenderService } from './gender.service';
import { GenderServiceCollection } from './gender.service.collection';
import { GenderMasterUI } from './master/gender.master';
import { Gender_ModuleDetail } from './gender.module.detail';

@NgModule({
    declarations: [
        GenderMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Gender_ModuleDetail
    ],
    exports: [
        GenderMasterUI
    ]
})

export class Gender_ModuleMaster { }