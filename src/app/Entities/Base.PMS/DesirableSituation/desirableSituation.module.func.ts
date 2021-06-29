import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { DesirableSituationService } from './desirableSituation.service';
import { DesirableSituationServiceCollection } from './desirableSituation.service.collection';
import { DesirableSituationMasterUI } from './master/desirableSituation.master';
import { DesirableSituationEditUI } from './edit/desirableSituation.edit';
import { DesirableSituationDeleteUI } from './delete/desirableSituation.delete';
import { DesirableSituationSeekUI } from './seek/desirableSituation.seek';


@NgModule({
    declarations: [
        DesirableSituationEditUI,
		DesirableSituationDeleteUI,
		DesirableSituationSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        DesirableSituationEditUI,
		DesirableSituationDeleteUI,
		DesirableSituationSeekUI
    ],
    providers: [
       //DesirableSituationService,
       // DesirableSituationServiceCollection,
    ]
})

export class DesirableSituation_ModuleFunc { }