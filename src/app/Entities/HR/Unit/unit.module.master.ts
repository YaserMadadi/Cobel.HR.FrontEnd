import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UnitService } from './unit.service';
import { UnitServiceCollection } from './unit.service.collection';
import { UnitMasterUI } from './master/unit.master';
import { Unit_ModuleDetail } from './unit.module.detail';

@NgModule({
    declarations: [
        UnitMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Unit_ModuleDetail
    ],
    exports: [
        UnitMasterUI
    ]
})

export class Unit_ModuleMaster { }