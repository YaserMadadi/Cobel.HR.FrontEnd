import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AppraiseTimeService } from './appraiseTime.service';
import { AppraiseTimeServiceCollection } from './appraiseTime.service.collection';
import { AppraiseTimeMasterUI } from './master/appraiseTime.master';
import { AppraiseTimeEditUI } from './edit/appraiseTime.edit';
import { AppraiseTimeDeleteUI } from './delete/appraiseTime.delete';
import { AppraiseTimeSeekUI } from './seek/appraiseTime.seek';


@NgModule({
    declarations: [
        AppraiseTimeEditUI,
		AppraiseTimeDeleteUI,
		AppraiseTimeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        AppraiseTimeEditUI,
		AppraiseTimeDeleteUI,
		AppraiseTimeSeekUI
    ]
})

export class AppraiseTime_ModuleFunc { }