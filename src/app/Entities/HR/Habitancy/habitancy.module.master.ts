import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HabitancyService } from './habitancy.service';
import { HabitancyServiceCollection } from './habitancy.service.collection';
import { HabitancyMasterUI } from './master/habitancy.master';
import { Habitancy_ModuleDetail } from './habitancy.module.detail';

@NgModule({
    declarations: [
        HabitancyMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Habitancy_ModuleDetail
    ],
    exports: [
        HabitancyMasterUI
    ],
    providers: [
        //HabitancyService,
       // HabitancyServiceCollection   
    ]
})

export class Habitancy_ModuleMaster { }