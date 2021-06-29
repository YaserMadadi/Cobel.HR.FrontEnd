import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { DrivingLicenseType } from '../drivingLicenseType';
import { DrivingLicenseTypeService } from '../drivingLicenseType.service';



@Component({
  selector: 'base-drivingLicenseType-edit',
  templateUrl: './drivingLicenseType.edit.html',
  styleUrls: ['./drivingLicenseType.edit.css']
})
export class DrivingLicenseTypeEditUI extends EditModal<DrivingLicenseType> implements IEditModal<DrivingLicenseType>  {
  
  constructor(private drivingLicenseTypeService: DrivingLicenseTypeService) {
    super(drivingLicenseTypeService); 
    this.currentInstance = new DrivingLicenseType();
  }

  

  @ViewChild('drivingLicenseTypeEditUI')
  private drivingLicenseTypeEditUI: NgForm;

  Init(drivingLicenseType: DrivingLicenseType = new DrivingLicenseType()) {
    if (drivingLicenseType.isNew)
      this.drivingLicenseTypeEditUI.reset();
    this.InitDrivingLicenseType(drivingLicenseType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitDrivingLicenseType(drivingLicenseType: DrivingLicenseType) {
    if (!drivingLicenseType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = drivingLicenseType;
  }

  ResetForm() {
    
  }
}