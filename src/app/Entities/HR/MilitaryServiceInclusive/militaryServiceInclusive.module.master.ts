import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceInclusiveService } from './militaryServiceInclusive.service';
import { MilitaryServiceInclusiveServiceCollection } from './militaryServiceInclusive.service.collection';
import { MilitaryServiceInclusiveMasterUI } from './master/militaryServiceInclusive.master';
import { MilitaryServiceInclusive_ModuleDetail } from './militaryServiceInclusive.module.detail';

@NgModule({
    declarations: [
        MilitaryServiceInclusiveMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MilitaryServiceInclusive_ModuleDetail
    ],
    exports: [
        MilitaryServiceInclusiveMasterUI
    ],
    providers: [
        //MilitaryServiceInclusiveService,
       // MilitaryServiceInclusiveServiceCollection   
    ]
})

export class MilitaryServiceInclusive_ModuleMaster { }