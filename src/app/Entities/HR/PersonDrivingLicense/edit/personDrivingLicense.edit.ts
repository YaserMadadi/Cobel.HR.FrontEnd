import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PersonDrivingLicense } from '../personDrivingLicense';
import { PersonDrivingLicenseService } from '../personDrivingLicense.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { DrivingLicenseType } from '../../../Base/DrivingLicenseType/drivingLicenseType';
import { DrivingLicenseTypeEditUI } from '../../../Base/DrivingLicenseType/edit/drivingLicenseType.edit';



@Component({
  selector: 'hr-personDrivingLicense-edit',
  templateUrl: './personDrivingLicense.edit.html',
  styleUrls: ['./personDrivingLicense.edit.css']
})
export class PersonDrivingLicenseEditUI extends EditModal<PersonDrivingLicense> implements IEditModal<PersonDrivingLicense>  {
  
  constructor(private personDrivingLicenseService: PersonDrivingLicenseService) {
    super(personDrivingLicenseService); 
    this.currentInstance = new PersonDrivingLicense();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.personDrivingLicenseService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- DrivingLicenseType --

  drivingLicenseTypeComponent : ForeignComponent<DrivingLicenseType> = new ForeignComponent<DrivingLicenseType>(this.personDrivingLicenseService.DrivingLicenseTypeService);

  @Input()
  public set DrivingLicenseType(value: DrivingLicenseType) {
    this.currentInstance.drivingLicenseType = this.drivingLicenseTypeComponent.instance = value;
  }  


  //#endregion -- DrivingLicenseType --
	//#endregion

  @ViewChild('personDrivingLicenseEditUI')
  private personDrivingLicenseEditUI: NgForm;

  Init(personDrivingLicense: PersonDrivingLicense = new PersonDrivingLicense()) {
    if (personDrivingLicense.isNew)
      this.personDrivingLicenseEditUI.reset();
    this.InitPersonDrivingLicense(personDrivingLicense);
    this.loadLists();
  }

  private loadLists() {
    
    this.drivingLicenseTypeComponent.LoadList();
  }
  
  InitPersonDrivingLicense(personDrivingLicense: PersonDrivingLicense) {
    if (!personDrivingLicense.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = personDrivingLicense.person;
			this.drivingLicenseTypeComponent.instance = personDrivingLicense.drivingLicenseType;
    } else {
      personDrivingLicense.person = this.personComponent.instance;
			personDrivingLicense.drivingLicenseType = this.drivingLicenseTypeComponent.instance;
    }
    this.currentInstance = personDrivingLicense;
  }

  ResetForm() {
    this.Person = new Person();
		this.DrivingLicenseType = new DrivingLicenseType();
  }
}