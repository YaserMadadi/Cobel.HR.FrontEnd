import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CurrentSituationService } from './currentSituation.service';
import { CurrentSituationServiceCollection } from './currentSituation.service.collection';
import { CurrentSituationMasterUI } from './master/currentSituation.master';
import { CurrentSituation_ModuleDetail } from './currentSituation.module.detail';

@NgModule({
    declarations: [
        CurrentSituationMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CurrentSituation_ModuleDetail
    ],
    exports: [
        CurrentSituationMasterUI
    ]
})

export class CurrentSituation_ModuleMaster { }