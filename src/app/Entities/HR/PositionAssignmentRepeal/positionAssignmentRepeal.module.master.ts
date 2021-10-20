import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionAssignmentRepealService } from './positionAssignmentRepeal.service';
import { PositionAssignmentRepealServiceCollection } from './positionAssignmentRepeal.service.collection';
import { PositionAssignmentRepealMasterUI } from './master/positionAssignmentRepeal.master';
import { PositionAssignmentRepeal_ModuleDetail } from './positionAssignmentRepeal.module.detail';

@NgModule({
    declarations: [
        PositionAssignmentRepealMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PositionAssignmentRepeal_ModuleDetail
    ],
    exports: [
        PositionAssignmentRepealMasterUI
    ]
})

export class PositionAssignmentRepeal_ModuleMaster { }