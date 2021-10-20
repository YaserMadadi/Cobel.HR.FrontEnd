import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { WorkExperience } from '../workExperience';
import { WorkExperienceService } from '../workExperience.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';



@Component({
  selector: 'hr-workExperience-edit',
  templateUrl: './workExperience.edit.html',
  styleUrls: ['./workExperience.edit.css']
})
export class WorkExperienceEditUI extends EditModal<WorkExperience> implements IEditModal<WorkExperience>  {
  
  constructor(private workExperienceService: WorkExperienceService) {
    super(workExperienceService); 
    this.currentInstance = new WorkExperience();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.workExperienceService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#endregion

  @ViewChild('workExperienceEditUI')
  private workExperienceEditUI: NgForm;

  Init(workExperience: WorkExperience = new WorkExperience()) {
    if (workExperience.isNew)
      this.workExperienceEditUI.reset();
    this.InitWorkExperience(workExperience);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitWorkExperience(workExperience: WorkExperience){
    this.currentInstance = this.service.CreateInstance();
    if (!workExperience.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = workExperience.person;
    } else {
      workExperience.person = this.personComponent.instance;
    }
    this.currentInstance = workExperience;
  }

  ResetForm() {
    this.Person = new Person();
  }
}