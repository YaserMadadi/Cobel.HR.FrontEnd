import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MeasurementUnit } from '../measurementUnit';
import { MeasurementUnitService } from '../measurementUnit.service';


@Component({
  selector: 'base-pms-measurementUnit-delete',
  templateUrl: './measurementUnit.delete.html',
  styleUrls: ['./measurementUnit.delete.css'],
  providers: [MeasurementUnitService]
})
export class MeasurementUnitDeleteUI extends DeleteModal<MeasurementUnit> {

    constructor(private measurementUnitService: MeasurementUnitService){
        super(measurementUnitService);
    }

}