import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SchoolHistoryService } from './schoolHistory.service';
import { SchoolHistoryServiceCollection } from './schoolHistory.service.collection';
import { SchoolHistoryMasterUI } from './master/schoolHistory.master';
import { SchoolHistory_ModuleDetail } from './schoolHistory.module.detail';

@NgModule({
    declarations: [
        SchoolHistoryMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        SchoolHistory_ModuleDetail
    ],
    exports: [
        SchoolHistoryMasterUI
    ]
})

export class SchoolHistory_ModuleMaster { }