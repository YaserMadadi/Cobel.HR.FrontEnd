import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MeasurementUnit } from '../measurementUnit';
import { MeasurementUnitService } from '../measurementUnit.service';



@Component({
  selector: 'base-pms-measurementUnit-edit',
  templateUrl: './measurementUnit.edit.html',
  styleUrls: ['./measurementUnit.edit.css']
})
export class MeasurementUnitEditUI extends EditModal<MeasurementUnit> implements IEditModal<MeasurementUnit>  {
  
  constructor(private measurementUnitService: MeasurementUnitService) {
    super(measurementUnitService); 
    this.currentInstance = new MeasurementUnit();
  }

  

  @ViewChild('measurementUnitEditUI')
  private measurementUnitEditUI: NgForm;

  Init(measurementUnit: MeasurementUnit = new MeasurementUnit()) {
    if (measurementUnit.isNew)
      this.measurementUnitEditUI.reset();
    this.InitMeasurementUnit(measurementUnit);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitMeasurementUnit(measurementUnit: MeasurementUnit) {
    if (!measurementUnit.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = measurementUnit;
  }

  ResetForm() {
    
  }
}