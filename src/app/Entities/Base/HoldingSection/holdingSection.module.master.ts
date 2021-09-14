import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HoldingSectionService } from './holdingSection.service';
import { HoldingSectionServiceCollection } from './holdingSection.service.collection';
import { HoldingSectionMasterUI } from './master/holdingSection.master';
import { HoldingSection_ModuleDetail } from './holdingSection.module.detail';

@NgModule({
    declarations: [
        HoldingSectionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        HoldingSection_ModuleDetail
    ],
    exports: [
        HoldingSectionMasterUI
    ]
})

export class HoldingSection_ModuleMaster { }