import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { SchoolHistory } from '../schoolHistory';
import { SchoolHistoryService } from '../schoolHistory.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { SchoolLevel } from '../../../Base/SchoolLevel/schoolLevel';
import { SchoolLevelEditUI } from '../../../Base/SchoolLevel/edit/schoolLevel.edit';



@Component({
  selector: 'hr-schoolHistory-edit',
  templateUrl: './schoolHistory.edit.html',
  styleUrls: ['./schoolHistory.edit.css']
})
export class SchoolHistoryEditUI extends EditModal<SchoolHistory> implements IEditModal<SchoolHistory>  {
  
  constructor(private schoolHistoryService: SchoolHistoryService) {
    super(schoolHistoryService); 
    this.currentInstance = new SchoolHistory();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.schoolHistoryService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- SchoolLevel --

  schoolLevelComponent : ForeignComponent<SchoolLevel> = new ForeignComponent<SchoolLevel>(this.schoolHistoryService.SchoolLevelService);

  @Input()
  public set SchoolLevel(value: SchoolLevel) {
    this.currentInstance.schoolLevel = this.schoolLevelComponent.instance = value;
  }  


  //#endregion -- SchoolLevel --
	//#endregion

  @ViewChild('schoolHistoryEditUI')
  private schoolHistoryEditUI: NgForm;

  Init(schoolHistory: SchoolHistory = new SchoolHistory()) {
    if (schoolHistory.isNew)
      this.schoolHistoryEditUI.reset();
    this.InitSchoolHistory(schoolHistory);
    this.loadLists();
  }

  private loadLists() {
    
    this.schoolLevelComponent.LoadList();
  }
  
  InitSchoolHistory(schoolHistory: SchoolHistory) {
    if (!schoolHistory.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = schoolHistory.person;
			this.schoolLevelComponent.instance = schoolHistory.schoolLevel;
    } else {
      schoolHistory.person = this.personComponent.instance;
			schoolHistory.schoolLevel = this.schoolLevelComponent.instance;
    }
    this.currentInstance = schoolHistory;
  }

  ResetForm() {
    this.Person = new Person();
		this.SchoolLevel = new SchoolLevel();
  }
}