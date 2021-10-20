import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionDivisionService } from './positionDivision.service';
import { PositionDivisionMasterUI } from './master/positionDivision.master';
import { PositionDivision_ModuleDetail } from './positionDivision.module.detail';

@NgModule({
    declarations: [
        PositionDivisionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PositionDivision_ModuleDetail
    ],
    exports: [
        PositionDivisionMasterUI
    ]
})

export class PositionDivision_ModuleMaster { }