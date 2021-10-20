import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Gender } from '../../../Base/Gender/gender';
import { GenderEditUI } from '../../../Base/Gender/edit/gender.edit';
import { City } from '../../../Base/City/city';
import { CityEditUI } from '../../../Base/City/edit/city.edit';
import { Religion } from '../../../Base/Religion/religion';
import { ReligionEditUI } from '../../../Base/Religion/edit/religion.edit';
import { HealthStatus } from '../../../Base/HealthStatus/healthStatus';
import { HealthStatusEditUI } from '../../../Base/HealthStatus/edit/healthStatus.edit';
import { Country } from '../../../Base/Country/country';
import { CountryEditUI } from '../../../Base/Country/edit/country.edit';
import { MaritalStatus } from '../../../Base.HR/MaritalStatus/maritalStatus';
import { MaritalStatusEditUI } from '../../../Base.HR/MaritalStatus/edit/maritalStatus.edit';



@Component({
  selector: 'hr-person-edit',
  templateUrl: './person.edit.html',
  styleUrls: ['./person.edit.css']
})
export class PersonEditUI extends EditModal<Person> implements IEditModal<Person>  {
  
  constructor(private personService: PersonService) {
    super(personService); 
    this.currentInstance = new Person();
  }

  //#region Foreign Entities
	
	//#region -- Gender --

  genderComponent : ForeignComponent<Gender> = new ForeignComponent<Gender>(this.personService.GenderService, false);

  @Input()
  public set Gender(value: Gender) {
    this.currentInstance.gender = this.genderComponent.instance = value;
  }  


  //#endregion -- Gender --
	//#region -- BirthCity --

  birthCityComponent : ForeignComponent<City> = new ForeignComponent<City>(this.personService.CityService);

  @Input()
  public set BirthCity(value: City) {
    this.currentInstance.birthCity = this.birthCityComponent.instance = value;
  }  


  //#endregion -- BirthCity --
	//#region -- Religion --

  religionComponent : ForeignComponent<Religion> = new ForeignComponent<Religion>(this.personService.ReligionService, false);

  @Input()
  public set Religion(value: Religion) {
    this.currentInstance.religion = this.religionComponent.instance = value;
  }  


  //#endregion -- Religion --
	//#region -- HealthStatus --

  healthStatusComponent : ForeignComponent<HealthStatus> = new ForeignComponent<HealthStatus>(this.personService.HealthStatusService, false);

  @Input()
  public set HealthStatus(value: HealthStatus) {
    this.currentInstance.healthStatus = this.healthStatusComponent.instance = value;
  }  


  //#endregion -- HealthStatus --
	//#region -- Nationality --

  nationalityComponent : ForeignComponent<Country> = new ForeignComponent<Country>(this.personService.CountryService);

  @Input()
  public set Nationality(value: Country) {
    this.currentInstance.nationality = this.nationalityComponent.instance = value;
  }  


  //#endregion -- Nationality --
	//#region -- MaritalStatus --

  maritalStatusComponent : ForeignComponent<MaritalStatus> = new ForeignComponent<MaritalStatus>(this.personService.MaritalStatusService, false);

  @Input()
  public set MaritalStatus(value: MaritalStatus) {
    this.currentInstance.maritalStatus = this.maritalStatusComponent.instance = value;
  }  


  //#endregion -- MaritalStatus --
	//#endregion

  @ViewChild('personEditUI')
  private personEditUI: NgForm;

  Init(person: Person = new Person()) {
    if (person.isNew)
      this.personEditUI.reset();
    this.InitPerson(person);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPerson(person: Person){
    this.currentInstance = this.service.CreateInstance();
    if (!person.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.genderComponent.instance = person.gender;
			this.birthCityComponent.instance = person.birthCity;
			this.religionComponent.instance = person.religion;
			this.healthStatusComponent.instance = person.healthStatus;
			this.nationalityComponent.instance = person.nationality;
			this.maritalStatusComponent.instance = person.maritalStatus;
    } else {
      person.gender = this.genderComponent.instance;
			person.birthCity = this.birthCityComponent.instance;
			person.religion = this.religionComponent.instance;
			person.healthStatus = this.healthStatusComponent.instance;
			person.nationality = this.nationalityComponent.instance;
			person.maritalStatus = this.maritalStatusComponent.instance;
    }
    this.currentInstance = person;
  }

  ResetForm() {
    this.Gender = new Gender();
		this.BirthCity = new City();
		this.Religion = new Religion();
		this.HealthStatus = new HealthStatus();
		this.Nationality = new Country();
		this.MaritalStatus = new MaritalStatus();
  }
}