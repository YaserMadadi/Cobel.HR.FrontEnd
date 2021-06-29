import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Unit } from '../unit';
import { UnitService } from '../unit.service';
import { UnitDeleteUI } from '../delete/unit.delete';
import { UnitEditUI } from '../edit/unit.edit';
import { PositionService } from '../../Position/position.service';



@Component({
  selector: 'hr-unit-master',
  templateUrl: './unit.master.html',
  styleUrls: ['./unit.master.css'],
  providers: [
    UnitService,
    PositionService,
  ]
})
export class UnitMasterUI extends MasterModal<Unit> {

  constructor(private unitService: UnitService) {
    super(unitService);
  }
}