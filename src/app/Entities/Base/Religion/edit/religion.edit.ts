import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Religion } from '../religion';
import { ReligionService } from '../religion.service';



@Component({
  selector: 'base-religion-edit',
  templateUrl: './religion.edit.html',
  styleUrls: ['./religion.edit.css']
})
export class ReligionEditUI extends EditModal<Religion> implements IEditModal<Religion>  {
  
  constructor(private religionService: ReligionService) {
    super(religionService); 
    this.currentInstance = new Religion();
  }

  

  @ViewChild('religionEditUI')
  private religionEditUI: NgForm;

  Init(religion: Religion = new Religion()) {
    if (religion.isNew)
      this.religionEditUI.reset();
    this.InitReligion(religion);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitReligion(religion: Religion) {
    if (!religion.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = religion;
  }

  ResetForm() {
    
  }
}