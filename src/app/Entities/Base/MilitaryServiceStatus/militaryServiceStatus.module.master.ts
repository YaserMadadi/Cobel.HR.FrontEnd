import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceStatusService } from './militaryServiceStatus.service';
import { MilitaryServiceStatusServiceCollection } from './militaryServiceStatus.service.collection';
import { MilitaryServiceStatusMasterUI } from './master/militaryServiceStatus.master';
import { MilitaryServiceStatus_ModuleDetail } from './militaryServiceStatus.module.detail';

@NgModule({
    declarations: [
        MilitaryServiceStatusMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MilitaryServiceStatus_ModuleDetail
    ],
    exports: [
        MilitaryServiceStatusMasterUI
    ]
})

export class MilitaryServiceStatus_ModuleMaster { }