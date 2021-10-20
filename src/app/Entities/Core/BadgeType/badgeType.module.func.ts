import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { BadgeTypeService } from './badgeType.service';
import { BadgeTypeServiceCollection } from './badgeType.service.collection';
import { BadgeTypeMasterUI } from './master/badgeType.master';
import { BadgeTypeEditUI } from './edit/badgeType.edit';
import { BadgeTypeDeleteUI } from './delete/badgeType.delete';
import { BadgeTypeSeekUI } from './seek/badgeType.seek';


@NgModule({
    declarations: [
        BadgeTypeEditUI,
		BadgeTypeDeleteUI,
		BadgeTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        BadgeTypeEditUI,
		BadgeTypeDeleteUI,
		BadgeTypeSeekUI
    ],
    providers: [
       //BadgeTypeService,
       // BadgeTypeServiceCollection,
    ]
})

export class BadgeType_ModuleFunc { }
