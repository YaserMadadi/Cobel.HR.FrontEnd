

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PositionDivision } from '../positionDivision';
import { PositionDivisionService } from '../positionDivision.service';


@Component({
  selector: 'base-hr-positionDivision-delete',
  templateUrl: './positionDivision.delete.html',
  styleUrls: ['./positionDivision.delete.css'],
  providers: [PositionDivisionService]
})
export class PositionDivisionDeleteUI extends DeleteModal<PositionDivision> {

    constructor(private positionDivisionService: PositionDivisionService){
        super(positionDivisionService);
    }

}
