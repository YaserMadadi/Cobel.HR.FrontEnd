import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Level } from '../level';
import { LevelService } from '../level.service';
import { LevelDeleteUI } from '../delete/level.delete';
import { LevelEditUI } from '../edit/level.edit';
import { PositionService } from '../../Position/position.service';



@Component({
  selector: 'hr-level-master',
  templateUrl: './level.master.html',
  styleUrls: ['./level.master.css'],
  providers: [
    LevelService,
    PositionService,
  ]
})
export class LevelMasterUI extends MasterModal<Level> {

  constructor(private levelService: LevelService) {
    super(levelService);
  }
}