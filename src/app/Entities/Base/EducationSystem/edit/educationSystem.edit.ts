import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { EducationSystem } from '../educationSystem';
import { EducationSystemService } from '../educationSystem.service';



@Component({
  selector: 'base-educationSystem-edit',
  templateUrl: './educationSystem.edit.html',
  styleUrls: ['./educationSystem.edit.css']
})
export class EducationSystemEditUI extends EditModal<EducationSystem> implements IEditModal<EducationSystem>  {
  
  constructor(private educationSystemService: EducationSystemService) {
    super(educationSystemService); 
    this.currentInstance = new EducationSystem();
  }

  

  @ViewChild('educationSystemEditUI')
  private educationSystemEditUI: NgForm;

  Init(educationSystem: EducationSystem = new EducationSystem()) {
    if (educationSystem.isNew)
      this.educationSystemEditUI.reset();
    this.InitEducationSystem(educationSystem);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitEducationSystem(educationSystem: EducationSystem){
    this.currentInstance = new EducationSystem();
    if (!educationSystem.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = educationSystem;
  }

  ResetForm() {
    
  }
}