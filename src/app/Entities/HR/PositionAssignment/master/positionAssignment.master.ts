import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PositionAssignment } from '../positionAssignment';
import { PositionAssignmentService } from '../positionAssignment.service';
import { PositionAssignmentDeleteUI } from '../delete/positionAssignment.delete';
import { PositionAssignmentEditUI } from '../edit/positionAssignment.edit';
import { PositionAssignmentRepealService } from '../../PositionAssignmentRepeal/positionAssignmentRepeal.service';



@Component({
  selector: 'hr-positionAssignment-master',
  templateUrl: './positionAssignment.master.html',
  styleUrls: ['./positionAssignment.master.css'],
  
})
export class PositionAssignmentMasterUI extends MasterModal<PositionAssignment> {

  constructor(private positionAssignmentService: PositionAssignmentService) {
    super(positionAssignmentService);
  }
}