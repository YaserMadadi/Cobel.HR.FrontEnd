import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AbilityLevelService } from './abilityLevel.service';
import { AbilityLevelServiceCollection } from './abilityLevel.service.collection';
import { AbilityLevelMasterUI } from './master/abilityLevel.master';
import { AbilityLevelEditUI } from './edit/abilityLevel.edit';
import { AbilityLevelDeleteUI } from './delete/abilityLevel.delete';
import { AbilityLevelSeekUI } from './seek/abilityLevel.seek';


@NgModule({
    declarations: [
        AbilityLevelEditUI,
		AbilityLevelDeleteUI,
		AbilityLevelSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        AbilityLevelEditUI,
		AbilityLevelDeleteUI,
		AbilityLevelSeekUI
    ]
})

export class AbilityLevel_ModuleFunc { }