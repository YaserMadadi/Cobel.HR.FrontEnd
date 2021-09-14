import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { HabitancyTypeService } from './habitancyType.service';
import { HabitancyTypeServiceCollection } from './habitancyType.service.collection';
import { HabitancyTypeMasterUI } from './master/habitancyType.master';
import { HabitancyTypeEditUI } from './edit/habitancyType.edit';
import { HabitancyTypeDeleteUI } from './delete/habitancyType.delete';
import { HabitancyTypeSeekUI } from './seek/habitancyType.seek';


@NgModule({
    declarations: [
        HabitancyTypeEditUI,
		HabitancyTypeDeleteUI,
		HabitancyTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        HabitancyTypeEditUI,
		HabitancyTypeDeleteUI,
		HabitancyTypeSeekUI
    ]
})

export class HabitancyType_ModuleFunc { }