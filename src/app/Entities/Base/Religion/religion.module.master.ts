import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ReligionService } from './religion.service';
import { ReligionServiceCollection } from './religion.service.collection';
import { ReligionMasterUI } from './master/religion.master';
import { Religion_ModuleDetail } from './religion.module.detail';

@NgModule({
    declarations: [
        ReligionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Religion_ModuleDetail
    ],
    exports: [
        ReligionMasterUI
    ],
    providers: [
        //ReligionService,
       // ReligionServiceCollection   
    ]
})

export class Religion_ModuleMaster { }