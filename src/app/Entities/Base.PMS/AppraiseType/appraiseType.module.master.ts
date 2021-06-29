import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraiseTypeService } from './appraiseType.service';
import { AppraiseTypeServiceCollection } from './appraiseType.service.collection';
import { AppraiseTypeMasterUI } from './master/appraiseType.master';
import { AppraiseType_ModuleDetail } from './appraiseType.module.detail';

@NgModule({
    declarations: [
        AppraiseTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AppraiseType_ModuleDetail
    ],
    exports: [
        AppraiseTypeMasterUI
    ],
    providers: [
        //AppraiseTypeService,
       // AppraiseTypeServiceCollection   
    ]
})

export class AppraiseType_ModuleMaster { }