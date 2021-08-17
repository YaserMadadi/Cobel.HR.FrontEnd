import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PositionDivisionService } from './positionDivision.service';
import { PositionDivisionServiceCollection } from './positionDivision.service.collection';
import { PositionDivisionMasterUI } from './master/positionDivision.master';
import { PositionDivisionEditUI } from './edit/positionDivision.edit';
import { PositionDivisionDeleteUI } from './delete/positionDivision.delete';
import { PositionDivisionSeekUI } from './seek/positionDivision.seek';


@NgModule({
    declarations: [
        PositionDivisionEditUI,
		PositionDivisionDeleteUI,
		PositionDivisionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        PositionDivisionEditUI,
		PositionDivisionDeleteUI,
		PositionDivisionSeekUI
    ],
    providers: [
       //PositionDivisionService,
       // PositionDivisionServiceCollection,
    ]
})

export class PositionDivision_ModuleFunc { }
