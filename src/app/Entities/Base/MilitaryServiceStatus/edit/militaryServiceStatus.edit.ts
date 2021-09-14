import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MilitaryServiceStatus } from '../militaryServiceStatus';
import { MilitaryServiceStatusService } from '../militaryServiceStatus.service';



@Component({
  selector: 'base-militaryServiceStatus-edit',
  templateUrl: './militaryServiceStatus.edit.html',
  styleUrls: ['./militaryServiceStatus.edit.css']
})
export class MilitaryServiceStatusEditUI extends EditModal<MilitaryServiceStatus> implements IEditModal<MilitaryServiceStatus>  {
  
  constructor(private militaryServiceStatusService: MilitaryServiceStatusService) {
    super(militaryServiceStatusService); 
    this.currentInstance = new MilitaryServiceStatus();
  }

  

  @ViewChild('militaryServiceStatusEditUI')
  private militaryServiceStatusEditUI: NgForm;

  Init(militaryServiceStatus: MilitaryServiceStatus = new MilitaryServiceStatus()) {
    if (militaryServiceStatus.isNew)
      this.militaryServiceStatusEditUI.reset();
    this.InitMilitaryServiceStatus(militaryServiceStatus);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitMilitaryServiceStatus(militaryServiceStatus: MilitaryServiceStatus){
    this.currentInstance = this.service.CreateInstance();
    if (!militaryServiceStatus.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = militaryServiceStatus;
  }

  ResetForm() {
    
  }
}