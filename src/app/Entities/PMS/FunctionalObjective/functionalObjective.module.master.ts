import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalObjectiveService } from './functionalObjective.service';
import { FunctionalObjectiveServiceCollection } from './functionalObjective.service.collection';
import { FunctionalObjectiveMasterUI } from './master/functionalObjective.master';
import { FunctionalObjective_ModuleDetail } from './functionalObjective.module.detail';

@NgModule({
    declarations: [
        FunctionalObjectiveMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FunctionalObjective_ModuleDetail
    ],
    exports: [
        FunctionalObjectiveMasterUI
    ]
})

export class FunctionalObjective_ModuleMaster { }