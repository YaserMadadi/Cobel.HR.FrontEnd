import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CoachService } from './coach.service';
import { CoachServiceCollection } from './coach.service.collection';
import { CoachMasterUI } from './master/coach.master';
import { CoachEditUI } from './edit/coach.edit';
import { CoachDeleteUI } from './delete/coach.delete';
import { CoachSeekUI } from './seek/coach.seek';

import { Gender_ModuleFunc } from '../../Base/Gender/gender.module.func';

@NgModule({
    declarations: [
        CoachEditUI,
		CoachDeleteUI,
		CoachSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Gender_ModuleFunc
    ],
    exports: [
        CoachEditUI,
		CoachDeleteUI,
		CoachSeekUI
    ]
})

export class Coach_ModuleFunc { }