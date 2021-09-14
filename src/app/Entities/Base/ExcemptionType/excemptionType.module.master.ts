import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ExcemptionTypeService } from './excemptionType.service';
import { ExcemptionTypeServiceCollection } from './excemptionType.service.collection';
import { ExcemptionTypeMasterUI } from './master/excemptionType.master';
import { ExcemptionType_ModuleDetail } from './excemptionType.module.detail';

@NgModule({
    declarations: [
        ExcemptionTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ExcemptionType_ModuleDetail
    ],
    exports: [
        ExcemptionTypeMasterUI
    ]
})

export class ExcemptionType_ModuleMaster { }