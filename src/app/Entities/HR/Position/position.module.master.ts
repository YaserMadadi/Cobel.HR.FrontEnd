import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionService } from './position.service';
import { PositionServiceCollection } from './position.service.collection';
import { PositionMasterUI } from './master/position.master';
import { Position_ModuleDetail } from './position.module.detail';

@NgModule({
    declarations: [
        PositionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Position_ModuleDetail
    ],
    exports: [
        PositionMasterUI
    ]
})

export class Position_ModuleMaster { }