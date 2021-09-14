import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ScoreCellService } from './scoreCell.service';
import { ScoreCellServiceCollection } from './scoreCell.service.collection';
import { ScoreCellMasterUI } from './master/scoreCell.master';
import { ScoreCellEditUI } from './edit/scoreCell.edit';
import { ScoreCellDeleteUI } from './delete/scoreCell.delete';
import { ScoreCellSeekUI } from './seek/scoreCell.seek';


@NgModule({
    declarations: [
        ScoreCellEditUI,
		ScoreCellDeleteUI,
		ScoreCellSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ScoreCellEditUI,
		ScoreCellDeleteUI,
		ScoreCellSeekUI
    ]
})

export class ScoreCell_ModuleFunc { }