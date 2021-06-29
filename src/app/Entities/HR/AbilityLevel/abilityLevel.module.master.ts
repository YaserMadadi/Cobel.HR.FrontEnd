import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AbilityLevelService } from './abilityLevel.service';
import { AbilityLevelServiceCollection } from './abilityLevel.service.collection';
import { AbilityLevelMasterUI } from './master/abilityLevel.master';
import { AbilityLevel_ModuleDetail } from './abilityLevel.module.detail';

@NgModule({
    declarations: [
        AbilityLevelMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AbilityLevel_ModuleDetail
    ],
    exports: [
        AbilityLevelMasterUI
    ],
    providers: [
        //AbilityLevelService,
       // AbilityLevelServiceCollection   
    ]
})

export class AbilityLevel_ModuleMaster { }