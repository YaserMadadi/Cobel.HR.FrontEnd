import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ScoreCellService } from './scoreCell.service';
import { ScoreCellServiceCollection } from './scoreCell.service.collection';


import { ScoreCell_CellAction_DetailUI } from './detail/scoreCell-cellAction.detail';
import { CellAction_ModuleMaster } from '../CellAction/cellAction.module.master';
import { ScoreCell_NonOperationalAppraise_DetailUI } from './detail/scoreCell-nonOperationalAppraise.detail';
import { NonOperationalAppraise_ModuleMaster } from '../NonOperationalAppraise/nonOperationalAppraise.module.master';
import { ScoreCell_OperationalAppraise_DetailUI } from './detail/scoreCell-operationalAppraise.detail';
import { OperationalAppraise_ModuleMaster } from '../OperationalAppraise/operationalAppraise.module.master';

@NgModule({
  declarations: [
    ScoreCell_CellAction_DetailUI,
		ScoreCell_NonOperationalAppraise_DetailUI,
		ScoreCell_OperationalAppraise_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CellAction_ModuleMaster,
		NonOperationalAppraise_ModuleMaster,
		OperationalAppraise_ModuleMaster,
  ],
  exports: [
    ScoreCell_CellAction_DetailUI,
		ScoreCell_NonOperationalAppraise_DetailUI,
		ScoreCell_OperationalAppraise_DetailUI
  ],
  
})
export class ScoreCell_ModuleDetail { }