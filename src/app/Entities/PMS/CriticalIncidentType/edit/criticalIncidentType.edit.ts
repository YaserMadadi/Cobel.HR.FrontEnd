import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CriticalIncidentType } from '../criticalIncidentType';
import { CriticalIncidentTypeService } from '../criticalIncidentType.service';



@Component({
  selector: 'pms-criticalIncidentType-edit',
  templateUrl: './criticalIncidentType.edit.html',
  styleUrls: ['./criticalIncidentType.edit.css']
})
export class CriticalIncidentTypeEditUI extends EditModal<CriticalIncidentType> implements IEditModal<CriticalIncidentType>  {
  
  constructor(private criticalIncidentTypeService: CriticalIncidentTypeService) {
    super(criticalIncidentTypeService); 
    this.currentInstance = new CriticalIncidentType();
  }

  

  @ViewChild('criticalIncidentTypeEditUI')
  private criticalIncidentTypeEditUI: NgForm;

  Init(criticalIncidentType: CriticalIncidentType = new CriticalIncidentType()) {
    if (criticalIncidentType.isNew)
      this.criticalIncidentTypeEditUI.reset();
    this.InitCriticalIncidentType(criticalIncidentType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCriticalIncidentType(criticalIncidentType: CriticalIncidentType) {
    if (!criticalIncidentType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = criticalIncidentType;
  }

  ResetForm() {
    
  }
}