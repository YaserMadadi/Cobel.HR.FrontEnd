import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ProvinceService } from './province.service';
import { ProvinceServiceCollection } from './province.service.collection';
import { ProvinceMasterUI } from './master/province.master';
import { Province_ModuleDetail } from './province.module.detail';

@NgModule({
    declarations: [
        ProvinceMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Province_ModuleDetail
    ],
    exports: [
        ProvinceMasterUI
    ]
})

export class Province_ModuleMaster { }