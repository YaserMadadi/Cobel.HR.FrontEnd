import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Gender } from '../gender';
import { GenderService } from '../gender.service';



@Component({
  selector: 'base-gender-edit',
  templateUrl: './gender.edit.html',
  styleUrls: ['./gender.edit.css']
})
export class GenderEditUI extends EditModal<Gender> implements IEditModal<Gender>  {
  
  constructor(private genderService: GenderService) {
    super(genderService); 
    this.currentInstance = new Gender();
  }

  

  @ViewChild('genderEditUI')
  private genderEditUI: NgForm;

  Init(gender: Gender = new Gender()) {
    if (gender.isNew)
      this.genderEditUI.reset();
    this.InitGender(gender);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitGender(gender: Gender){
    this.currentInstance = new Gender();
    if (!gender.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = gender;
  }

  ResetForm() {
    
  }
}