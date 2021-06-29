import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PositionAssignment } from '../positionAssignment';
import { PositionAssignmentService } from '../positionAssignment.service';


@Component({
  selector: 'hr-positionAssignment-delete',
  templateUrl: './positionAssignment.delete.html',
  styleUrls: ['./positionAssignment.delete.css'],
  providers: [PositionAssignmentService]
})
export class PositionAssignmentDeleteUI extends DeleteModal<PositionAssignment> {

    constructor(private positionAssignmentService: PositionAssignmentService){
        super(positionAssignmentService);
    }

}