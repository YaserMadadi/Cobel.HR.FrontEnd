import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ReligionService } from './religion.service';
import { ReligionServiceCollection } from './religion.service.collection';
import { ReligionMasterUI } from './master/religion.master';
import { ReligionEditUI } from './edit/religion.edit';
import { ReligionDeleteUI } from './delete/religion.delete';
import { ReligionSeekUI } from './seek/religion.seek';


@NgModule({
    declarations: [
        ReligionEditUI,
		ReligionDeleteUI,
		ReligionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ReligionEditUI,
		ReligionDeleteUI,
		ReligionSeekUI
    ]
})

export class Religion_ModuleFunc { }