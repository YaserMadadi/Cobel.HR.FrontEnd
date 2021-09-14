import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PositionAssignmentRepeal } from '../positionAssignmentRepeal';
import { PositionAssignmentRepealService } from '../positionAssignmentRepeal.service';


@Component({
  selector: 'hr-positionAssignmentRepeal-delete',
  templateUrl: './positionAssignmentRepeal.delete.html',
  styleUrls: ['./positionAssignmentRepeal.delete.css'],
  
})
export class PositionAssignmentRepealDeleteUI extends DeleteModal<PositionAssignmentRepeal> {

    constructor(private positionAssignmentRepealService: PositionAssignmentRepealService){
        super(positionAssignmentRepealService);
    }

}