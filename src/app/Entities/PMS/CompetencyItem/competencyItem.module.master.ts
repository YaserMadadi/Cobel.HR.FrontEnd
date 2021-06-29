import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CompetencyItemService } from './competencyItem.service';
import { CompetencyItemServiceCollection } from './competencyItem.service.collection';
import { CompetencyItemMasterUI } from './master/competencyItem.master';
import { CompetencyItem_ModuleDetail } from './competencyItem.module.detail';

@NgModule({
    declarations: [
        CompetencyItemMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CompetencyItem_ModuleDetail
    ],
    exports: [
        CompetencyItemMasterUI
    ],
    providers: [
        //CompetencyItemService,
       // CompetencyItemServiceCollection   
    ]
})

export class CompetencyItem_ModuleMaster { }