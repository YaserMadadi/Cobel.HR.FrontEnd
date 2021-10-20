import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MeasurementUnit } from '../measurementUnit';
import { MeasurementUnitService } from '../measurementUnit.service';
import { MeasurementUnitDeleteUI } from '../delete/measurementUnit.delete';
import { MeasurementUnitEditUI } from '../edit/measurementUnit.edit';
import { FunctionalKPIService } from '../../../PMS/FunctionalKPI/functionalKPI.service';



@Component({
  selector: 'base-pms-measurementUnit-master',
  templateUrl: './measurementUnit.master.html',
  styleUrls: ['./measurementUnit.master.css'],
  
})
export class MeasurementUnitMasterUI extends MasterModal<MeasurementUnit> {

  constructor(private measurementUnitService: MeasurementUnitService) {
    super(measurementUnitService);
  }
}