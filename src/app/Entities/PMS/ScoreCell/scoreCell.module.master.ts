import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ScoreCellService } from './scoreCell.service';
import { ScoreCellServiceCollection } from './scoreCell.service.collection';
import { ScoreCellMasterUI } from './master/scoreCell.master';
import { ScoreCell_ModuleDetail } from './scoreCell.module.detail';

@NgModule({
    declarations: [
        ScoreCellMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ScoreCell_ModuleDetail
    ],
    exports: [
        ScoreCellMasterUI
    ]
})

export class ScoreCell_ModuleMaster { }