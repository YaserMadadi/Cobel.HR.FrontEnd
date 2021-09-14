import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { BadgeService } from './badge.service';
import { BadgeServiceCollection } from './badge.service.collection';
import { BadgeMasterUI } from './master/badge.master';
import { BadgeEditUI } from './edit/badge.edit';
import { BadgeDeleteUI } from './delete/badge.delete';
import { BadgeSeekUI } from './seek/badge.seek';

import { MenuItem_ModuleFunc } from '../MenuItem/menuItem.module.func';
import { BadgeType_ModuleFunc } from '../BadgeType/badgeType.module.func';

@NgModule({
    declarations: [
        BadgeEditUI,
		BadgeDeleteUI,
		BadgeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        MenuItem_ModuleFunc,
		BadgeType_ModuleFunc
    ],
    exports: [
        BadgeEditUI,
		BadgeDeleteUI,
		BadgeSeekUI
    ],
    providers: [
       //BadgeService,
       // BadgeServiceCollection,
    ]
})

export class Badge_ModuleFunc { }
