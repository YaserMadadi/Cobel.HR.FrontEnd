import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CellActionService } from './cellAction.service';
import { CellActionServiceCollection } from './cellAction.service.collection';
import { CellActionMasterUI } from './master/cellAction.master';
import { CellAction_ModuleDetail } from './cellAction.module.detail';

@NgModule({
    declarations: [
        CellActionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CellAction_ModuleDetail
    ],
    exports: [
        CellActionMasterUI
    ]
})

export class CellAction_ModuleMaster { }