import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceExcemptionService } from './militaryServiceExcemption.service';
import { MilitaryServiceExcemptionServiceCollection } from './militaryServiceExcemption.service.collection';
import { MilitaryServiceExcemptionMasterUI } from './master/militaryServiceExcemption.master';
import { MilitaryServiceExcemption_ModuleDetail } from './militaryServiceExcemption.module.detail';

@NgModule({
    declarations: [
        MilitaryServiceExcemptionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MilitaryServiceExcemption_ModuleDetail
    ],
    exports: [
        MilitaryServiceExcemptionMasterUI
    ]
})

export class MilitaryServiceExcemption_ModuleMaster { }