import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { HabitancyType } from '../habitancyType';
import { HabitancyTypeService } from '../habitancyType.service';



@Component({
  selector: 'base-habitancyType-edit',
  templateUrl: './habitancyType.edit.html',
  styleUrls: ['./habitancyType.edit.css']
})
export class HabitancyTypeEditUI extends EditModal<HabitancyType> implements IEditModal<HabitancyType>  {
  
  constructor(private habitancyTypeService: HabitancyTypeService) {
    super(habitancyTypeService); 
    this.currentInstance = new HabitancyType();
  }

  

  @ViewChild('habitancyTypeEditUI')
  private habitancyTypeEditUI: NgForm;

  Init(habitancyType: HabitancyType = new HabitancyType()) {
    if (habitancyType.isNew)
      this.habitancyTypeEditUI.reset();
    this.InitHabitancyType(habitancyType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitHabitancyType(habitancyType: HabitancyType) {
    if (!habitancyType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = habitancyType;
  }

  ResetForm() {
    
  }
}