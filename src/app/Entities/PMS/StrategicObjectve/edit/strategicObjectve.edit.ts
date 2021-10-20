import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { StrategicObjectve } from '../strategicObjectve';
import { StrategicObjectveService } from '../strategicObjectve.service';



@Component({
  selector: 'pms-strategicObjectve-edit',
  templateUrl: './strategicObjectve.edit.html',
  styleUrls: ['./strategicObjectve.edit.css']
})
export class StrategicObjectveEditUI extends EditModal<StrategicObjectve> implements IEditModal<StrategicObjectve>  {
  
  constructor(private strategicObjectveService: StrategicObjectveService) {
    super(strategicObjectveService); 
    this.currentInstance = new StrategicObjectve();
  }

  

  @ViewChild('strategicObjectveEditUI')
  private strategicObjectveEditUI: NgForm;

  Init(strategicObjectve: StrategicObjectve = new StrategicObjectve()) {
    if (strategicObjectve.isNew)
      this.strategicObjectveEditUI.reset();
    this.InitStrategicObjectve(strategicObjectve);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitStrategicObjectve(strategicObjectve: StrategicObjectve){
    this.currentInstance = this.service.CreateInstance();
    if (!strategicObjectve.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = strategicObjectve;
  }

  ResetForm() {
    
  }
}