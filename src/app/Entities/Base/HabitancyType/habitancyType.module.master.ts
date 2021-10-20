import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HabitancyTypeService } from './habitancyType.service';
import { HabitancyTypeServiceCollection } from './habitancyType.service.collection';
import { HabitancyTypeMasterUI } from './master/habitancyType.master';
import { HabitancyType_ModuleDetail } from './habitancyType.module.detail';

@NgModule({
    declarations: [
        HabitancyTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        HabitancyType_ModuleDetail
    ],
    exports: [
        HabitancyTypeMasterUI
    ]
})

export class HabitancyType_ModuleMaster { }