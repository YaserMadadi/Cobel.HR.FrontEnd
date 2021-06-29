import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PositionService } from './position.service';
import { PositionServiceCollection } from './position.service.collection';
import { PositionMasterUI } from './master/position.master';
import { PositionEditUI } from './edit/position.edit';
import { PositionDeleteUI } from './delete/position.delete';
import { PositionSeekUI } from './seek/position.seek';

import { Level_ModuleFunc } from '../Level/level.module.func';
import { Unit_ModuleFunc } from '../Unit/unit.module.func';
import { PositionCategory_ModuleFunc } from '../PositionCategory/positionCategory.module.func';

@NgModule({
    declarations: [
        PositionEditUI,
		PositionDeleteUI,
		PositionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Level_ModuleFunc,
		Unit_ModuleFunc,
		PositionCategory_ModuleFunc
    ],
    exports: [
        PositionEditUI,
		PositionDeleteUI,
		PositionSeekUI
    ],
    providers: [
       //PositionService,
       // PositionServiceCollection,
    ]
})

export class Position_ModuleFunc { }