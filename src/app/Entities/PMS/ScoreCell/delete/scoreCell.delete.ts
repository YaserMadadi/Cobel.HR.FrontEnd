import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ScoreCell } from '../scoreCell';
import { ScoreCellService } from '../scoreCell.service';


@Component({
  selector: 'pms-scoreCell-delete',
  templateUrl: './scoreCell.delete.html',
  styleUrls: ['./scoreCell.delete.css'],
  providers: [ScoreCellService]
})
export class ScoreCellDeleteUI extends DeleteModal<ScoreCell> {

    constructor(private scoreCellService: ScoreCellService){
        super(scoreCellService);
    }

}