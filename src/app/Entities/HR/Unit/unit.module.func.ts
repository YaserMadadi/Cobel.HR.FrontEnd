import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { UnitService } from './unit.service';
import { UnitServiceCollection } from './unit.service.collection';
import { UnitMasterUI } from './master/unit.master';
import { UnitEditUI } from './edit/unit.edit';
import { UnitDeleteUI } from './delete/unit.delete';
import { UnitSeekUI } from './seek/unit.seek';

import { Department_ModuleFunc } from '../Department/department.module.func';
import { PositionCategory_ModuleFunc } from '../../Base.HR/PositionCategory/positionCategory.module.func';

@NgModule({
    declarations: [
        UnitEditUI,
        UnitDeleteUI,
        UnitSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Department_ModuleFunc,
        PositionCategory_ModuleFunc
    ],
    exports: [
        UnitEditUI,
        UnitDeleteUI,
        UnitSeekUI
    ]
})

export class Unit_ModuleFunc { }