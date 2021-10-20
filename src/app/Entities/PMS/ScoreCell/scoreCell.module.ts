import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ScoreCellService } from './scoreCell.service';
import { ScoreCellServiceCollection } from './scoreCell.service.collection';

import { ScoreCellIndexUI } from './index/scoreCell.index';
import { ScoreCell_ModuleFunc } from './scoreCell.module.func';
import { ScoreCell_ModuleMaster } from './scoreCell.module.master';


import { CellAction_ModuleFunc } from '../CellAction/cellAction.module.func';
import { CellAction_ModuleMaster } from '../CellAction/cellAction.module.master';
import { NonOperationalAppraise_ModuleFunc } from '../NonOperationalAppraise/nonOperationalAppraise.module.func';
import { NonOperationalAppraise_ModuleMaster } from '../NonOperationalAppraise/nonOperationalAppraise.module.master';
import { OperationalAppraise_ModuleFunc } from '../OperationalAppraise/operationalAppraise.module.func';
import { OperationalAppraise_ModuleMaster } from '../OperationalAppraise/operationalAppraise.module.master';

@NgModule({
  declarations: [
    ScoreCellIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ScoreCell_ModuleMaster,
		CellAction_ModuleMaster,
		NonOperationalAppraise_ModuleMaster,
		OperationalAppraise_ModuleMaster,
  ],
  exports: [
    ScoreCellIndexUI,
		ScoreCell_ModuleMaster,
   ]
})
export class ScoreCellModule {}