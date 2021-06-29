import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingService } from './coaching.service';
import { CoachingServiceCollection } from './coaching.service.collection';
import { CoachingMasterUI } from './master/coaching.master';
import { Coaching_ModuleDetail } from './coaching.module.detail';

@NgModule({
    declarations: [
        CoachingMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Coaching_ModuleDetail
    ],
    exports: [
        CoachingMasterUI
    ],
    providers: [
        //CoachingService,
       // CoachingServiceCollection   
    ]
})

export class Coaching_ModuleMaster { }