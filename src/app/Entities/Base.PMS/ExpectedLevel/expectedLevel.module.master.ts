import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ExpectedLevelService } from './expectedLevel.service';
import { ExpectedLevelServiceCollection } from './expectedLevel.service.collection';
import { ExpectedLevelMasterUI } from './master/expectedLevel.master';
import { ExpectedLevel_ModuleDetail } from './expectedLevel.module.detail';

@NgModule({
    declarations: [
        ExpectedLevelMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ExpectedLevel_ModuleDetail
    ],
    exports: [
        ExpectedLevelMasterUI
    ]
})

export class ExpectedLevel_ModuleMaster { }