import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { YearService } from './year.service';
import { YearServiceCollection } from './year.service.collection';
import { YearMasterUI } from './master/year.master';
import { YearEditUI } from './edit/year.edit';
import { YearDeleteUI } from './delete/year.delete';
import { YearSeekUI } from './seek/year.seek';


@NgModule({
    declarations: [
        YearEditUI,
		YearDeleteUI,
		YearSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        YearEditUI,
		YearDeleteUI,
		YearSeekUI
    ]
})

export class Year_ModuleFunc { }