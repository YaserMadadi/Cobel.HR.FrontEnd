import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DesirableSituationService } from './desirableSituation.service';
import { DesirableSituationServiceCollection } from './desirableSituation.service.collection';
import { DesirableSituationMasterUI } from './master/desirableSituation.master';
import { DesirableSituation_ModuleDetail } from './desirableSituation.module.detail';

@NgModule({
    declarations: [
        DesirableSituationMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        DesirableSituation_ModuleDetail
    ],
    exports: [
        DesirableSituationMasterUI
    ]
})

export class DesirableSituation_ModuleMaster { }