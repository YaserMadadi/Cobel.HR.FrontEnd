import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MilitaryService } from '../militaryService';
import { MilitaryServiceService } from '../militaryService.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { MilitaryServiceStatus } from '../../../Base/MilitaryServiceStatus/militaryServiceStatus';
import { MilitaryServiceStatusEditUI } from '../../../Base/MilitaryServiceStatus/edit/militaryServiceStatus.edit';



@Component({
  selector: 'hr-militaryService-edit',
  templateUrl: './militaryService.edit.html',
  styleUrls: ['./militaryService.edit.css']
})
export class MilitaryServiceEditUI extends EditModal<MilitaryService> implements IEditModal<MilitaryService>  {
  
  constructor(private militaryServiceService: MilitaryServiceService) {
    super(militaryServiceService); 
    this.currentInstance = new MilitaryService();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.militaryServiceService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- MilitaryServiceStatus --

  militaryServiceStatusComponent : ForeignComponent<MilitaryServiceStatus> = new ForeignComponent<MilitaryServiceStatus>(this.militaryServiceService.MilitaryServiceStatusService);

  @Input()
  public set MilitaryServiceStatus(value: MilitaryServiceStatus) {
    this.currentInstance.militaryServiceStatus = this.militaryServiceStatusComponent.instance = value;
  }  


  //#endregion -- MilitaryServiceStatus --
	//#endregion

  @ViewChild('militaryServiceEditUI')
  private militaryServiceEditUI: NgForm;

  Init(militaryService: MilitaryService = new MilitaryService()) {
    if (militaryService.isNew)
      this.militaryServiceEditUI.reset();
    this.InitMilitaryService(militaryService);
    this.loadLists();
  }

  private loadLists() {
    
    this.militaryServiceStatusComponent.LoadList();
  }
  
  InitMilitaryService(militaryService: MilitaryService) {
    if (!militaryService.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = militaryService.person;
			this.militaryServiceStatusComponent.instance = militaryService.militaryServiceStatus;
    } else {
      militaryService.person = this.personComponent.instance;
			militaryService.militaryServiceStatus = this.militaryServiceStatusComponent.instance;
    }
    this.currentInstance = militaryService;
  }

  ResetForm() {
    this.Person = new Person();
		this.MilitaryServiceStatus = new MilitaryServiceStatus();
  }
}