import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { YearQuarterService } from './yearQuarter.service';
import { YearQuarterServiceCollection } from './yearQuarter.service.collection';
import { YearQuarterMasterUI } from './master/yearQuarter.master';
import { YearQuarter_ModuleDetail } from './yearQuarter.module.detail';

@NgModule({
    declarations: [
        YearQuarterMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        YearQuarter_ModuleDetail
    ],
    exports: [
        YearQuarterMasterUI
    ]
})

export class YearQuarter_ModuleMaster { }