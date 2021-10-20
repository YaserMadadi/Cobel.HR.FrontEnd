

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { SubSystem } from '../subSystem';
import { SubSystemService } from '../subSystem.service';



@Component({
  selector: 'core-subSystem-edit',
  templateUrl: './subSystem.edit.html',
  styleUrls: ['./subSystem.edit.css']
})
export class SubSystemEditUI extends EditModal<SubSystem> implements IEditModal<SubSystem>  {
  
  constructor(private subSystemService: SubSystemService) {
    super(subSystemService); 
    this.currentInstance = new SubSystem();
  }

  

  @ViewChild('subSystemEditUI')
  private subSystemEditUI: NgForm;

  Init(subSystem: SubSystem = new SubSystem()) {
    if (subSystem.isNew)
      this.subSystemEditUI.reset();
    this.InitSubSystem(subSystem);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitSubSystem(subSystem: SubSystem) {
    this.currentInstance = this.service.CreateInstance();
    if (!subSystem.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = subSystem;
  }

  async onSave(subSystem: SubSystem, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(subSystem, editUI, isContinue);
  }

  ResetForm() {
    
  }
}
