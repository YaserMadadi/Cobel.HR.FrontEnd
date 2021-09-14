

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MaritalStatus } from '../maritalStatus';
import { MaritalStatusService } from '../maritalStatus.service';



@Component({
  selector: 'base-hr-maritalStatus-edit',
  templateUrl: './maritalStatus.edit.html',
  styleUrls: ['./maritalStatus.edit.css']
})
export class MaritalStatusEditUI extends EditModal<MaritalStatus> implements IEditModal<MaritalStatus>  {
  
  constructor(private maritalStatusService: MaritalStatusService) {
    super(maritalStatusService); 
    this.currentInstance = new MaritalStatus();
  }

  

  @ViewChild('maritalStatusEditUI')
  private maritalStatusEditUI: NgForm;

  Init(maritalStatus: MaritalStatus = new MaritalStatus()) {
    if (maritalStatus.isNew)
      this.maritalStatusEditUI.reset();
    this.InitMaritalStatus(maritalStatus);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitMaritalStatus(maritalStatus: MaritalStatus){
    this.currentInstance = this.service.CreateInstance();
    if (!maritalStatus.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = maritalStatus;
  }

  ResetForm() {
    
  }
}
