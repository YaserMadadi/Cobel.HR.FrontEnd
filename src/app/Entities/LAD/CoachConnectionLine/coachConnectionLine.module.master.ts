import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachConnectionLineService } from './coachConnectionLine.service';
import { CoachConnectionLineServiceCollection } from './coachConnectionLine.service.collection';
import { CoachConnectionLineMasterUI } from './master/coachConnectionLine.master';
import { CoachConnectionLine_ModuleDetail } from './coachConnectionLine.module.detail';

@NgModule({
    declarations: [
        CoachConnectionLineMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CoachConnectionLine_ModuleDetail
    ],
    exports: [
        CoachConnectionLineMasterUI
    ],
    providers: [
        //CoachConnectionLineService,
       // CoachConnectionLineServiceCollection   
    ]
})

export class CoachConnectionLine_ModuleMaster { }