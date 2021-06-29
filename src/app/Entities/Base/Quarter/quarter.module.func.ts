import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { QuarterService } from './quarter.service';
import { QuarterServiceCollection } from './quarter.service.collection';
import { QuarterMasterUI } from './master/quarter.master';
import { QuarterEditUI } from './edit/quarter.edit';
import { QuarterDeleteUI } from './delete/quarter.delete';
import { QuarterSeekUI } from './seek/quarter.seek';


@NgModule({
    declarations: [
        QuarterEditUI,
		QuarterDeleteUI,
		QuarterSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        QuarterEditUI,
		QuarterDeleteUI,
		QuarterSeekUI
    ],
    providers: [
       //QuarterService,
       // QuarterServiceCollection,
    ]
})

export class Quarter_ModuleFunc { }