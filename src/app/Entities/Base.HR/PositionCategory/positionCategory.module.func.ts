import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PositionCategoryService } from './positionCategory.service';
import { PositionCategoryServiceCollection } from './positionCategory.service.collection';
import { PositionCategoryMasterUI } from './master/positionCategory.master';
import { PositionCategoryEditUI } from './edit/positionCategory.edit';
import { PositionCategoryDeleteUI } from './delete/positionCategory.delete';
import { PositionCategorySeekUI } from './seek/positionCategory.seek';


@NgModule({
    declarations: [
        PositionCategoryEditUI,
		PositionCategoryDeleteUI,
		PositionCategorySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        PositionCategoryEditUI,
		PositionCategoryDeleteUI,
		PositionCategorySeekUI
    ],
    providers: [
       //PositionCategoryService,
       // PositionCategoryServiceCollection,
    ]
})

export class PositionCategory_ModuleFunc { }
