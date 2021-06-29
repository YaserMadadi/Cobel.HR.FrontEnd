import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Unit } from '../unit';
import { UnitService } from '../unit.service';


@Component({
  selector: 'hr-unit-delete',
  templateUrl: './unit.delete.html',
  styleUrls: ['./unit.delete.css'],
  providers: [UnitService]
})
export class UnitDeleteUI extends DeleteModal<Unit> {

    constructor(private unitService: UnitService){
        super(unitService);
    }

}