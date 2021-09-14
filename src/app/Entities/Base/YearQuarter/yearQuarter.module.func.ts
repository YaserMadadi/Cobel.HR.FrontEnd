import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { YearQuarterService } from './yearQuarter.service';
import { YearQuarterServiceCollection } from './yearQuarter.service.collection';
import { YearQuarterMasterUI } from './master/yearQuarter.master';
import { YearQuarterEditUI } from './edit/yearQuarter.edit';
import { YearQuarterDeleteUI } from './delete/yearQuarter.delete';
import { YearQuarterSeekUI } from './seek/yearQuarter.seek';

import { Year_ModuleFunc } from '../Year/year.module.func';
import { Quarter_ModuleFunc } from '../Quarter/quarter.module.func';

@NgModule({
    declarations: [
        YearQuarterEditUI,
		YearQuarterDeleteUI,
		YearQuarterSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Year_ModuleFunc,
		Quarter_ModuleFunc
    ],
    exports: [
        YearQuarterEditUI,
		YearQuarterDeleteUI,
		YearQuarterSeekUI
    ]
})

export class YearQuarter_ModuleFunc { }