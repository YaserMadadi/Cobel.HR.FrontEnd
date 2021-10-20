import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CellActionService } from './cellAction.service';
import { CellActionServiceCollection } from './cellAction.service.collection';
import { CellActionMasterUI } from './master/cellAction.master';
import { CellActionEditUI } from './edit/cellAction.edit';
import { CellActionDeleteUI } from './delete/cellAction.delete';
import { CellActionSeekUI } from './seek/cellAction.seek';

import { ScoreCell_ModuleFunc } from '../ScoreCell/scoreCell.module.func';

@NgModule({
    declarations: [
        CellActionEditUI,
		CellActionDeleteUI,
		CellActionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        ScoreCell_ModuleFunc
    ],
    exports: [
        CellActionEditUI,
		CellActionDeleteUI,
		CellActionSeekUI
    ]
})

export class CellAction_ModuleFunc { }