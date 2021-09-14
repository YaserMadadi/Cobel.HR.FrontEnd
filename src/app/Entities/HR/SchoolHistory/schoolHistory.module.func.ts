import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { SchoolHistoryService } from './schoolHistory.service';
import { SchoolHistoryServiceCollection } from './schoolHistory.service.collection';
import { SchoolHistoryMasterUI } from './master/schoolHistory.master';
import { SchoolHistoryEditUI } from './edit/schoolHistory.edit';
import { SchoolHistoryDeleteUI } from './delete/schoolHistory.delete';
import { SchoolHistorySeekUI } from './seek/schoolHistory.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { SchoolLevel_ModuleFunc } from '../../Base/SchoolLevel/schoolLevel.module.func';

@NgModule({
    declarations: [
        SchoolHistoryEditUI,
		SchoolHistoryDeleteUI,
		SchoolHistorySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		SchoolLevel_ModuleFunc
    ],
    exports: [
        SchoolHistoryEditUI,
		SchoolHistoryDeleteUI,
		SchoolHistorySeekUI
    ]
})

export class SchoolHistory_ModuleFunc { }