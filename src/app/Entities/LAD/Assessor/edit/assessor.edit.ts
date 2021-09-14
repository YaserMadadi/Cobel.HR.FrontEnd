import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Assessor } from '../assessor';
import { AssessorService } from '../assessor.service';
import { Gender } from '../../../Base/Gender/gender';
import { GenderEditUI } from '../../../Base/Gender/edit/gender.edit';



@Component({
  selector: 'lad-assessor-edit',
  templateUrl: './assessor.edit.html',
  styleUrls: ['./assessor.edit.css']
})
export class AssessorEditUI extends EditModal<Assessor> implements IEditModal<Assessor>  {
  
  constructor(private assessorService: AssessorService) {
    super(assessorService); 
    this.currentInstance = new Assessor();
  }

  //#region Foreign Entities
	
	//#region -- Gender --

  genderComponent : ForeignComponent<Gender> = new ForeignComponent<Gender>(this.assessorService.GenderService);

  @Input()
  public set Gender(value: Gender) {
    this.currentInstance.gender = this.genderComponent.instance = value;
  }  


  //#endregion -- Gender --
	//#endregion

  @ViewChild('assessorEditUI')
  private assessorEditUI: NgForm;

  Init(assessor: Assessor = new Assessor()) {
    if (assessor.isNew)
      this.assessorEditUI.reset();
    this.InitAssessor(assessor);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAssessor(assessor: Assessor){
    this.currentInstance = this.service.CreateInstance();
    if (!assessor.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.genderComponent.instance = assessor.gender;
    } else {
      assessor.gender = this.genderComponent.instance;
    }
    this.currentInstance = assessor;
  }

  ResetForm() {
    this.Gender = new Gender();
  }
}