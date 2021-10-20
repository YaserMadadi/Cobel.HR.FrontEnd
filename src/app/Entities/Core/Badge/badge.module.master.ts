import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BadgeService } from './badge.service';
import { BadgeServiceCollection } from './badge.service.collection';
import { BadgeMasterUI } from './master/badge.master';
import { Badge_ModuleDetail } from './badge.module.detail';

@NgModule({
    declarations: [
        BadgeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Badge_ModuleDetail
    ],
    exports: [
        BadgeMasterUI
    ],
    providers: [
        //BadgeService,
       // BadgeServiceCollection   
    ]
})

export class Badge_ModuleMaster { }