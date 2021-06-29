import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ExpectedLevelService } from './expectedLevel.service';
import { ExpectedLevelServiceCollection } from './expectedLevel.service.collection';
import { ExpectedLevelMasterUI } from './master/expectedLevel.master';
import { ExpectedLevelEditUI } from './edit/expectedLevel.edit';
import { ExpectedLevelDeleteUI } from './delete/expectedLevel.delete';
import { ExpectedLevelSeekUI } from './seek/expectedLevel.seek';


@NgModule({
    declarations: [
        ExpectedLevelEditUI,
		ExpectedLevelDeleteUI,
		ExpectedLevelSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ExpectedLevelEditUI,
		ExpectedLevelDeleteUI,
		ExpectedLevelSeekUI
    ],
    providers: [
       //ExpectedLevelService,
       // ExpectedLevelServiceCollection,
    ]
})

export class ExpectedLevel_ModuleFunc { }