import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Habitancy } from '../habitancy';
import { HabitancyService } from '../habitancy.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { HabitancyType } from '../../../Base/HabitancyType/habitancyType';
import { HabitancyTypeEditUI } from '../../../Base/HabitancyType/edit/habitancyType.edit';
import { City } from '../../../Base/City/city';
import { CityEditUI } from '../../../Base/City/edit/city.edit';



@Component({
  selector: 'hr-habitancy-edit',
  templateUrl: './habitancy.edit.html',
  styleUrls: ['./habitancy.edit.css']
})
export class HabitancyEditUI extends EditModal<Habitancy> implements IEditModal<Habitancy>  {
  
  constructor(private habitancyService: HabitancyService) {
    super(habitancyService); 
    this.currentInstance = new Habitancy();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.habitancyService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- HabitancyType --

  habitancyTypeComponent : ForeignComponent<HabitancyType> = new ForeignComponent<HabitancyType>(this.habitancyService.HabitancyTypeService);

  @Input()
  public set HabitancyType(value: HabitancyType) {
    this.currentInstance.habitancyType = this.habitancyTypeComponent.instance = value;
  }  


  //#endregion -- HabitancyType --
	//#region -- City --

  cityComponent : ForeignComponent<City> = new ForeignComponent<City>(this.habitancyService.CityService);

  @Input()
  public set City(value: City) {
    this.currentInstance.city = this.cityComponent.instance = value;
  }  


  //#endregion -- City --
	//#endregion

  @ViewChild('habitancyEditUI')
  private habitancyEditUI: NgForm;

  Init(habitancy: Habitancy = new Habitancy()) {
    if (habitancy.isNew)
      this.habitancyEditUI.reset();
    this.InitHabitancy(habitancy);
    this.loadLists();
  }

  private loadLists() {
    
    this.habitancyTypeComponent.LoadList();
  }
  
  InitHabitancy(habitancy: Habitancy){
    this.currentInstance = this.service.CreateInstance();
    if (!habitancy.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = habitancy.person;
			this.habitancyTypeComponent.instance = habitancy.habitancyType;
			this.cityComponent.instance = habitancy.city;
    } else {
      habitancy.person = this.personComponent.instance;
			habitancy.habitancyType = this.habitancyTypeComponent.instance;
			habitancy.city = this.cityComponent.instance;
    }
    this.currentInstance = habitancy;
  }

  ResetForm() {
    this.Person = new Person();
		this.HabitancyType = new HabitancyType();
		this.City = new City();
  }
}