import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MilitaryServiceInclusiveService } from './militaryServiceInclusive.service';
import { MilitaryServiceInclusiveServiceCollection } from './militaryServiceInclusive.service.collection';
import { MilitaryServiceInclusiveMasterUI } from './master/militaryServiceInclusive.master';
import { MilitaryServiceInclusiveEditUI } from './edit/militaryServiceInclusive.edit';
import { MilitaryServiceInclusiveDeleteUI } from './delete/militaryServiceInclusive.delete';
import { MilitaryServiceInclusiveSeekUI } from './seek/militaryServiceInclusive.seek';

import { MilitaryService_ModuleFunc } from '../MilitaryService/militaryService.module.func';
import { InclusiveType_ModuleFunc } from '../../Base/InclusiveType/inclusiveType.module.func';

@NgModule({
    declarations: [
        MilitaryServiceInclusiveEditUI,
		MilitaryServiceInclusiveDeleteUI,
		MilitaryServiceInclusiveSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        MilitaryService_ModuleFunc,
		InclusiveType_ModuleFunc
    ],
    exports: [
        MilitaryServiceInclusiveEditUI,
		MilitaryServiceInclusiveDeleteUI,
		MilitaryServiceInclusiveSeekUI
    ]
})

export class MilitaryServiceInclusive_ModuleFunc { }