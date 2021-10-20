import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConfigQualitativeObjectiveService } from './configQualitativeObjective.service';
import { ConfigQualitativeObjectiveServiceCollection } from './configQualitativeObjective.service.collection';
import { ConfigQualitativeObjectiveMasterUI } from './master/configQualitativeObjective.master';
import { ConfigQualitativeObjective_ModuleDetail } from './configQualitativeObjective.module.detail';

@NgModule({
    declarations: [
        ConfigQualitativeObjectiveMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ConfigQualitativeObjective_ModuleDetail
    ],
    exports: [
        ConfigQualitativeObjectiveMasterUI
    ]
})

export class ConfigQualitativeObjective_ModuleMaster { }