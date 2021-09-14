import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CompetencyItemService } from './competencyItem.service';
import { CompetencyItemServiceCollection } from './competencyItem.service.collection';
import { CompetencyItemMasterUI } from './master/competencyItem.master';
import { CompetencyItemEditUI } from './edit/competencyItem.edit';
import { CompetencyItemDeleteUI } from './delete/competencyItem.delete';
import { CompetencyItemSeekUI } from './seek/competencyItem.seek';


@NgModule({
    declarations: [
        CompetencyItemEditUI,
		CompetencyItemDeleteUI,
		CompetencyItemSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        CompetencyItemEditUI,
		CompetencyItemDeleteUI,
		CompetencyItemSeekUI
    ]
})

export class CompetencyItem_ModuleFunc { }