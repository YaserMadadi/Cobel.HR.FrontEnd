import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceService } from './militaryService.service';
import { MilitaryServiceServiceCollection } from './militaryService.service.collection';
import { MilitaryServiceMasterUI } from './master/militaryService.master';
import { MilitaryService_ModuleDetail } from './militaryService.module.detail';

@NgModule({
    declarations: [
        MilitaryServiceMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MilitaryService_ModuleDetail
    ],
    exports: [
        MilitaryServiceMasterUI
    ]
})

export class MilitaryService_ModuleMaster { }