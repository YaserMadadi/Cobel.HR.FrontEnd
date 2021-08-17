

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { EmploymentStatus } from '../employmentStatus';
import { EmploymentStatusService } from '../employmentStatus.service';



@Component({
  selector: 'base-hr-employmentStatus-edit',
  templateUrl: './employmentStatus.edit.html',
  styleUrls: ['./employmentStatus.edit.css']
})
export class EmploymentStatusEditUI extends EditModal<EmploymentStatus> implements IEditModal<EmploymentStatus>  {
  
  constructor(private employmentStatusService: EmploymentStatusService) {
    super(employmentStatusService); 
    this.currentInstance = new EmploymentStatus();
  }

  

  @ViewChild('employmentStatusEditUI')
  private employmentStatusEditUI: NgForm;

  Init(employmentStatus: EmploymentStatus = new EmploymentStatus()) {
    if (employmentStatus.isNew)
      this.employmentStatusEditUI.reset();
    this.InitEmploymentStatus(employmentStatus);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitEmploymentStatus(employmentStatus: EmploymentStatus) {
    if (!employmentStatus.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = employmentStatus;
  }

  ResetForm() {
    
  }
}
