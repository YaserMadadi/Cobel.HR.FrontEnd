import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MilitaryServiceExcemptionService } from './militaryServiceExcemption.service';
import { MilitaryServiceExcemptionServiceCollection } from './militaryServiceExcemption.service.collection';
import { MilitaryServiceExcemptionMasterUI } from './master/militaryServiceExcemption.master';
import { MilitaryServiceExcemptionEditUI } from './edit/militaryServiceExcemption.edit';
import { MilitaryServiceExcemptionDeleteUI } from './delete/militaryServiceExcemption.delete';
import { MilitaryServiceExcemptionSeekUI } from './seek/militaryServiceExcemption.seek';

import { MilitaryService_ModuleFunc } from '../MilitaryService/militaryService.module.func';
import { ExcemptionType_ModuleFunc } from '../../Base/ExcemptionType/excemptionType.module.func';

@NgModule({
    declarations: [
        MilitaryServiceExcemptionEditUI,
		MilitaryServiceExcemptionDeleteUI,
		MilitaryServiceExcemptionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        MilitaryService_ModuleFunc,
		ExcemptionType_ModuleFunc
    ],
    exports: [
        MilitaryServiceExcemptionEditUI,
		MilitaryServiceExcemptionDeleteUI,
		MilitaryServiceExcemptionSeekUI
    ]
})

export class MilitaryServiceExcemption_ModuleFunc { }