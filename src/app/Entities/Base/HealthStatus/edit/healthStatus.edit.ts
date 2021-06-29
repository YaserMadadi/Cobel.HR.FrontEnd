import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { HealthStatus } from '../healthStatus';
import { HealthStatusService } from '../healthStatus.service';



@Component({
  selector: 'base-healthStatus-edit',
  templateUrl: './healthStatus.edit.html',
  styleUrls: ['./healthStatus.edit.css']
})
export class HealthStatusEditUI extends EditModal<HealthStatus> implements IEditModal<HealthStatus>  {
  
  constructor(private healthStatusService: HealthStatusService) {
    super(healthStatusService); 
    this.currentInstance = new HealthStatus();
  }

  

  @ViewChild('healthStatusEditUI')
  private healthStatusEditUI: NgForm;

  Init(healthStatus: HealthStatus = new HealthStatus()) {
    if (healthStatus.isNew)
      this.healthStatusEditUI.reset();
    this.InitHealthStatus(healthStatus);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitHealthStatus(healthStatus: HealthStatus) {
    if (!healthStatus.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = healthStatus;
  }

  ResetForm() {
    
  }
}