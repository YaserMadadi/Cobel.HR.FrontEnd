import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { UniversityDegree } from '../universityDegree';
import { UniversityDegreeService } from '../universityDegree.service';



@Component({
  selector: 'base-universityDegree-edit',
  templateUrl: './universityDegree.edit.html',
  styleUrls: ['./universityDegree.edit.css']
})
export class UniversityDegreeEditUI extends EditModal<UniversityDegree> implements IEditModal<UniversityDegree>  {
  
  constructor(private universityDegreeService: UniversityDegreeService) {
    super(universityDegreeService); 
    this.currentInstance = new UniversityDegree();
  }

  

  @ViewChild('universityDegreeEditUI')
  private universityDegreeEditUI: NgForm;

  Init(universityDegree: UniversityDegree = new UniversityDegree()) {
    if (universityDegree.isNew)
      this.universityDegreeEditUI.reset();
    this.InitUniversityDegree(universityDegree);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitUniversityDegree(universityDegree: UniversityDegree) {
    if (!universityDegree.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = universityDegree;
  }

  ResetForm() {
    
  }
}