import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CurrentSituationService } from './currentSituation.service';
import { CurrentSituationServiceCollection } from './currentSituation.service.collection';
import { CurrentSituationMasterUI } from './master/currentSituation.master';
import { CurrentSituationEditUI } from './edit/currentSituation.edit';
import { CurrentSituationDeleteUI } from './delete/currentSituation.delete';
import { CurrentSituationSeekUI } from './seek/currentSituation.seek';


@NgModule({
    declarations: [
        CurrentSituationEditUI,
		CurrentSituationDeleteUI,
		CurrentSituationSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        CurrentSituationEditUI,
		CurrentSituationDeleteUI,
		CurrentSituationSeekUI
    ],
    providers: [
       //CurrentSituationService,
       // CurrentSituationServiceCollection,
    ]
})

export class CurrentSituation_ModuleFunc { }