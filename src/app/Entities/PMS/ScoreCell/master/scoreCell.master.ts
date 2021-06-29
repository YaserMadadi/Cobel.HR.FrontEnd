import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ScoreCell } from '../scoreCell';
import { ScoreCellService } from '../scoreCell.service';
import { ScoreCellDeleteUI } from '../delete/scoreCell.delete';
import { ScoreCellEditUI } from '../edit/scoreCell.edit';
import { OperationalAppraiseService } from '../../OperationalAppraise/operationalAppraise.service';
import { NonOperationalAppraiseService } from '../../NonOperationalAppraise/nonOperationalAppraise.service';
import { CellActionService } from '../../CellAction/cellAction.service';



@Component({
  selector: 'pms-scoreCell-master',
  templateUrl: './scoreCell.master.html',
  styleUrls: ['./scoreCell.master.css'],
  providers: [
    ScoreCellService,
    OperationalAppraiseService,
		NonOperationalAppraiseService,
		CellActionService,
  ]
})
export class ScoreCellMasterUI extends MasterModal<ScoreCell> {

  constructor(private scoreCellService: ScoreCellService) {
    super(scoreCellService);
  }
}