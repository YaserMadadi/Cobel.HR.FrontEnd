import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TrainingService } from './training.service';
import { TrainingServiceCollection } from './training.service.collection';
import { TrainingMasterUI } from './master/training.master';
import { Training_ModuleDetail } from './training.module.detail';

@NgModule({
    declarations: [
        TrainingMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Training_ModuleDetail
    ],
    exports: [
        TrainingMasterUI
    ],
    providers: [
        //TrainingService,
       // TrainingServiceCollection   
    ]
})

export class Training_ModuleMaster { }