import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SchoolLevelService } from './schoolLevel.service';
import { SchoolLevelServiceCollection } from './schoolLevel.service.collection';
import { SchoolLevelMasterUI } from './master/schoolLevel.master';
import { SchoolLevel_ModuleDetail } from './schoolLevel.module.detail';

@NgModule({
    declarations: [
        SchoolLevelMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        SchoolLevel_ModuleDetail
    ],
    exports: [
        SchoolLevelMasterUI
    ]
})

export class SchoolLevel_ModuleMaster { }