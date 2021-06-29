import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionCategoryService } from './positionCategory.service';
import { PositionCategoryServiceCollection } from './positionCategory.service.collection';
import { PositionCategoryMasterUI } from './master/positionCategory.master';
import { PositionCategory_ModuleDetail } from './positionCategory.module.detail';

@NgModule({
    declarations: [
        PositionCategoryMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PositionCategory_ModuleDetail
    ],
    exports: [
        PositionCategoryMasterUI
    ],
    providers: [
        //PositionCategoryService,
       // PositionCategoryServiceCollection   
    ]
})

export class PositionCategory_ModuleMaster { }