import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AppraiseTypeService } from './appraiseType.service';
import { AppraiseTypeServiceCollection } from './appraiseType.service.collection';
import { AppraiseTypeMasterUI } from './master/appraiseType.master';
import { AppraiseTypeEditUI } from './edit/appraiseType.edit';
import { AppraiseTypeDeleteUI } from './delete/appraiseType.delete';
import { AppraiseTypeSeekUI } from './seek/appraiseType.seek';


@NgModule({
    declarations: [
        AppraiseTypeEditUI,
		AppraiseTypeDeleteUI,
		AppraiseTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        AppraiseTypeEditUI,
		AppraiseTypeDeleteUI,
		AppraiseTypeSeekUI
    ],
    providers: [
       //AppraiseTypeService,
       // AppraiseTypeServiceCollection,
    ]
})

export class AppraiseType_ModuleFunc { }