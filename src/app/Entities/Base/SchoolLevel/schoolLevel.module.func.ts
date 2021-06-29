import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { SchoolLevelService } from './schoolLevel.service';
import { SchoolLevelServiceCollection } from './schoolLevel.service.collection';
import { SchoolLevelMasterUI } from './master/schoolLevel.master';
import { SchoolLevelEditUI } from './edit/schoolLevel.edit';
import { SchoolLevelDeleteUI } from './delete/schoolLevel.delete';
import { SchoolLevelSeekUI } from './seek/schoolLevel.seek';


@NgModule({
    declarations: [
        SchoolLevelEditUI,
		SchoolLevelDeleteUI,
		SchoolLevelSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        SchoolLevelEditUI,
		SchoolLevelDeleteUI,
		SchoolLevelSeekUI
    ],
    providers: [
       //SchoolLevelService,
       // SchoolLevelServiceCollection,
    ]
})

export class SchoolLevel_ModuleFunc { }