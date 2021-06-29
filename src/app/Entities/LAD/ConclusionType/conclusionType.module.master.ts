import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConclusionTypeService } from './conclusionType.service';
import { ConclusionTypeServiceCollection } from './conclusionType.service.collection';
import { ConclusionTypeMasterUI } from './master/conclusionType.master';
import { ConclusionType_ModuleDetail } from './conclusionType.module.detail';

@NgModule({
    declarations: [
        ConclusionTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ConclusionType_ModuleDetail
    ],
    exports: [
        ConclusionTypeMasterUI
    ],
    providers: [
        //ConclusionTypeService,
       // ConclusionTypeServiceCollection   
    ]
})

export class ConclusionType_ModuleMaster { }