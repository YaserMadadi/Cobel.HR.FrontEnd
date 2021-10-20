import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { SubSystemService } from './subSystem.service';
import { SubSystemServiceCollection } from './subSystem.service.collection';
import { SubSystemMasterUI } from './master/subSystem.master';
import { SubSystemEditUI } from './edit/subSystem.edit';
import { SubSystemDeleteUI } from './delete/subSystem.delete';
import { SubSystemSeekUI } from './seek/subSystem.seek';


@NgModule({
    declarations: [
        SubSystemEditUI,
		SubSystemDeleteUI,
		SubSystemSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        SubSystemEditUI,
		SubSystemDeleteUI,
		SubSystemSeekUI
    ],
    providers: [
       //SubSystemService,
       // SubSystemServiceCollection,
    ]
})

export class SubSystem_ModuleFunc { }
