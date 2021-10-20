import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ObjectiveWeightNonOperationalService } from './objectiveWeightNonOperational.service';
import { ObjectiveWeightNonOperationalServiceCollection } from './objectiveWeightNonOperational.service.collection';
import { ObjectiveWeightNonOperationalMasterUI } from './master/objectiveWeightNonOperational.master';
import { ObjectiveWeightNonOperationalEditUI } from './edit/objectiveWeightNonOperational.edit';
import { ObjectiveWeightNonOperationalDeleteUI } from './delete/objectiveWeightNonOperational.delete';
import { ObjectiveWeightNonOperationalSeekUI } from './seek/objectiveWeightNonOperational.seek';

import { Level_ModuleFunc } from '../../HR/Level/level.module.func';

@NgModule({
    declarations: [
        ObjectiveWeightNonOperationalEditUI,
		ObjectiveWeightNonOperationalDeleteUI,
		ObjectiveWeightNonOperationalSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Level_ModuleFunc
    ],
    exports: [
        ObjectiveWeightNonOperationalEditUI,
		ObjectiveWeightNonOperationalDeleteUI,
		ObjectiveWeightNonOperationalSeekUI
    ]
})

export class ObjectiveWeightNonOperational_ModuleFunc { }