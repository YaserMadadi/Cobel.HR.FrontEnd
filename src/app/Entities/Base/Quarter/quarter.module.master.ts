import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuarterService } from './quarter.service';
import { QuarterServiceCollection } from './quarter.service.collection';
import { QuarterMasterUI } from './master/quarter.master';
import { Quarter_ModuleDetail } from './quarter.module.detail';

@NgModule({
    declarations: [
        QuarterMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Quarter_ModuleDetail
    ],
    exports: [
        QuarterMasterUI
    ],
    providers: [
        //QuarterService,
       // QuarterServiceCollection   
    ]
})

export class Quarter_ModuleMaster { }