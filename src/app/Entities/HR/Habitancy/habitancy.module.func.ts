import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { HabitancyService } from './habitancy.service';
import { HabitancyServiceCollection } from './habitancy.service.collection';
import { HabitancyMasterUI } from './master/habitancy.master';
import { HabitancyEditUI } from './edit/habitancy.edit';
import { HabitancyDeleteUI } from './delete/habitancy.delete';
import { HabitancySeekUI } from './seek/habitancy.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { HabitancyType_ModuleFunc } from '../../Base/HabitancyType/habitancyType.module.func';
import { City_ModuleFunc } from '../../Base/City/city.module.func';

@NgModule({
    declarations: [
        HabitancyEditUI,
		HabitancyDeleteUI,
		HabitancySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		HabitancyType_ModuleFunc,
		City_ModuleFunc
    ],
    exports: [
        HabitancyEditUI,
		HabitancyDeleteUI,
		HabitancySeekUI
    ]
})

export class Habitancy_ModuleFunc { }