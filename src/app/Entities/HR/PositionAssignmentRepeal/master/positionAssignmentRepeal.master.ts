import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PositionAssignmentRepeal } from '../positionAssignmentRepeal';
import { PositionAssignmentRepealService } from '../positionAssignmentRepeal.service';
import { PositionAssignmentRepealDeleteUI } from '../delete/positionAssignmentRepeal.delete';
import { PositionAssignmentRepealEditUI } from '../edit/positionAssignmentRepeal.edit';



@Component({
  selector: 'hr-positionAssignmentRepeal-master',
  templateUrl: './positionAssignmentRepeal.master.html',
  styleUrls: ['./positionAssignmentRepeal.master.css']
})
export class PositionAssignmentRepealMasterUI extends MasterModal<PositionAssignmentRepeal> {

  constructor(private positionAssignmentRepealService: PositionAssignmentRepealService) {
    super(positionAssignmentRepealService);
  }
}