import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RelativeService } from './relative.service';
import { RelativeServiceCollection } from './relative.service.collection';
import { RelativeMasterUI } from './master/relative.master';
import { Relative_ModuleDetail } from './relative.module.detail';

@NgModule({
    declarations: [
        RelativeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Relative_ModuleDetail
    ],
    exports: [
        RelativeMasterUI
    ]
})

export class Relative_ModuleMaster { }