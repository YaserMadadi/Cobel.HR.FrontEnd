import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ObjectiveWeightNonOperationalService } from './objectiveWeightNonOperational.service';
import { ObjectiveWeightNonOperationalServiceCollection } from './objectiveWeightNonOperational.service.collection';
import { ObjectiveWeightNonOperationalMasterUI } from './master/objectiveWeightNonOperational.master';
import { ObjectiveWeightNonOperational_ModuleDetail } from './objectiveWeightNonOperational.module.detail';

@NgModule({
    declarations: [
        ObjectiveWeightNonOperationalMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ObjectiveWeightNonOperational_ModuleDetail
    ],
    exports: [
        ObjectiveWeightNonOperationalMasterUI
    ],
    providers: [
        //ObjectiveWeightNonOperationalService,
       // ObjectiveWeightNonOperationalServiceCollection   
    ]
})

export class ObjectiveWeightNonOperational_ModuleMaster { }