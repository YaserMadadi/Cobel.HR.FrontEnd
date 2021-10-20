import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { GenderService } from './gender.service';
import { GenderServiceCollection } from './gender.service.collection';
import { GenderMasterUI } from './master/gender.master';
import { GenderEditUI } from './edit/gender.edit';
import { GenderDeleteUI } from './delete/gender.delete';
import { GenderSeekUI } from './seek/gender.seek';


@NgModule({
    declarations: [
        GenderEditUI,
		GenderDeleteUI,
		GenderSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        GenderEditUI,
		GenderDeleteUI,
		GenderSeekUI
    ]
})

export class Gender_ModuleFunc { }