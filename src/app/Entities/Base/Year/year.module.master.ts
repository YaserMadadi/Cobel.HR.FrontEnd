import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { YearService } from './year.service';
import { YearServiceCollection } from './year.service.collection';
import { YearMasterUI } from './master/year.master';
import { Year_ModuleDetail } from './year.module.detail';

@NgModule({
    declarations: [
        YearMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Year_ModuleDetail
    ],
    exports: [
        YearMasterUI
    ]
})

export class Year_ModuleMaster { }