import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachService } from './coach.service';
import { CoachServiceCollection } from './coach.service.collection';
import { CoachMasterUI } from './master/coach.master';
import { Coach_ModuleDetail } from './coach.module.detail';

@NgModule({
    declarations: [
        CoachMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Coach_ModuleDetail
    ],
    exports: [
        CoachMasterUI
    ]
})

export class Coach_ModuleMaster { }