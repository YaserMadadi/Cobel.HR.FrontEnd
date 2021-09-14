import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PositionDivision } from '../positionDivision';
import { PositionDivisionService } from '../positionDivision.service';
import { PositionDivisionDeleteUI } from '../delete/positionDivision.delete';
import { PositionDivisionEditUI } from '../edit/positionDivision.edit';
import { PositionService } from '../../../HR/Position/position.service';



@Component({
  selector: 'base-hr-positionDivision-master',
  templateUrl: './positionDivision.master.html',
  styleUrls: ['./positionDivision.master.css'],
  
})
export class PositionDivisionMasterUI extends MasterModal<PositionDivision> {

  constructor(private positionDivisionService: PositionDivisionService) {
    super(positionDivisionService);
  }
}
