import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { HoldingSectionService } from './holdingSection.service';
import { HoldingSectionServiceCollection } from './holdingSection.service.collection';
import { HoldingSectionMasterUI } from './master/holdingSection.master';
import { HoldingSectionEditUI } from './edit/holdingSection.edit';
import { HoldingSectionDeleteUI } from './delete/holdingSection.delete';
import { HoldingSectionSeekUI } from './seek/holdingSection.seek';


@NgModule({
    declarations: [
        HoldingSectionEditUI,
		HoldingSectionDeleteUI,
		HoldingSectionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        HoldingSectionEditUI,
		HoldingSectionDeleteUI,
		HoldingSectionSeekUI
    ]
})

export class HoldingSection_ModuleFunc { }