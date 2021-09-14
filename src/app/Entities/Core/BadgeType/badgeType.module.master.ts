import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BadgeTypeService } from './badgeType.service';
import { BadgeTypeServiceCollection } from './badgeType.service.collection';
import { BadgeTypeMasterUI } from './master/badgeType.master';
import { BadgeType_ModuleDetail } from './badgeType.module.detail';

@NgModule({
    declarations: [
        BadgeTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        BadgeType_ModuleDetail
    ],
    exports: [
        BadgeTypeMasterUI
    ],
    providers: [
        //BadgeTypeService,
       // BadgeTypeServiceCollection   
    ]
})

export class BadgeType_ModuleMaster { }