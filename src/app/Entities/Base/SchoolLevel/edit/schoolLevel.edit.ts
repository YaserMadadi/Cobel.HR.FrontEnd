import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { SchoolLevel } from '../schoolLevel';
import { SchoolLevelService } from '../schoolLevel.service';



@Component({
  selector: 'base-schoolLevel-edit',
  templateUrl: './schoolLevel.edit.html',
  styleUrls: ['./schoolLevel.edit.css']
})
export class SchoolLevelEditUI extends EditModal<SchoolLevel> implements IEditModal<SchoolLevel>  {
  
  constructor(private schoolLevelService: SchoolLevelService) {
    super(schoolLevelService); 
    this.currentInstance = new SchoolLevel();
  }

  

  @ViewChild('schoolLevelEditUI')
  private schoolLevelEditUI: NgForm;

  Init(schoolLevel: SchoolLevel = new SchoolLevel()) {
    if (schoolLevel.isNew)
      this.schoolLevelEditUI.reset();
    this.InitSchoolLevel(schoolLevel);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitSchoolLevel(schoolLevel: SchoolLevel) {
    if (!schoolLevel.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = schoolLevel;
  }

  ResetForm() {
    
  }
}