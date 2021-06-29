import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityHistoryService } from './universityHistory.service';
import { UniversityHistoryServiceCollection } from './universityHistory.service.collection';
import { UniversityHistoryMasterUI } from './master/universityHistory.master';
import { UniversityHistory_ModuleDetail } from './universityHistory.module.detail';

@NgModule({
    declarations: [
        UniversityHistoryMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        UniversityHistory_ModuleDetail
    ],
    exports: [
        UniversityHistoryMasterUI
    ],
    providers: [
        //UniversityHistoryService,
       // UniversityHistoryServiceCollection   
    ]
})

export class UniversityHistory_ModuleMaster { }