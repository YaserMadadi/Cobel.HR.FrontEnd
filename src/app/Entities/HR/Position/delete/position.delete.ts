import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Position } from '../position';
import { PositionService } from '../position.service';


@Component({
  selector: 'hr-position-delete',
  templateUrl: './position.delete.html',
  styleUrls: ['./position.delete.css'],
  providers: [PositionService]
})
export class PositionDeleteUI extends DeleteModal<Position> {

    constructor(private positionService: PositionService){
        super(positionService);
    }

}