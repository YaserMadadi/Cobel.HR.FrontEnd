import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MaritalInfoService } from './maritalInfo.service';
import { MaritalInfoServiceCollection } from './maritalInfo.service.collection';
import { MaritalInfoMasterUI } from './master/maritalInfo.master';
import { MaritalInfo_ModuleDetail } from './maritalInfo.module.detail';

@NgModule({
    declarations: [
        MaritalInfoMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MaritalInfo_ModuleDetail
    ],
    exports: [
        MaritalInfoMasterUI
    ]
})

export class MaritalInfo_ModuleMaster { }