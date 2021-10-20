import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MilitaryServiceService } from './militaryService.service';
import { MilitaryServiceServiceCollection } from './militaryService.service.collection';
import { MilitaryServiceMasterUI } from './master/militaryService.master';
import { MilitaryServiceEditUI } from './edit/militaryService.edit';
import { MilitaryServiceDeleteUI } from './delete/militaryService.delete';
import { MilitaryServiceSeekUI } from './seek/militaryService.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { MilitaryServiceStatus_ModuleFunc } from '../../Base/MilitaryServiceStatus/militaryServiceStatus.module.func';

@NgModule({
    declarations: [
        MilitaryServiceEditUI,
		MilitaryServiceDeleteUI,
		MilitaryServiceSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		MilitaryServiceStatus_ModuleFunc
    ],
    exports: [
        MilitaryServiceEditUI,
		MilitaryServiceDeleteUI,
		MilitaryServiceSeekUI
    ]
})

export class MilitaryService_ModuleFunc { }