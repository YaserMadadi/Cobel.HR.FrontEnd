import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Passport } from '../passport';
import { PassportService } from '../passport.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';



@Component({
  selector: 'hr-passport-edit',
  templateUrl: './passport.edit.html',
  styleUrls: ['./passport.edit.css']
})
export class PassportEditUI extends EditModal<Passport> implements IEditModal<Passport>  {
  
  constructor(private passportService: PassportService) {
    super(passportService); 
    this.currentInstance = new Passport();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.passportService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#endregion

  @ViewChild('passportEditUI')
  private passportEditUI: NgForm;

  Init(passport: Passport = new Passport()) {
    if (passport.isNew)
      this.passportEditUI.reset();
    this.InitPassport(passport);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPassport(passport: Passport){
    this.currentInstance = this.service.CreateInstance();
    if (!passport.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = passport.person;
    } else {
      passport.person = this.personComponent.instance;
    }
    this.currentInstance = passport;
  }

  ResetForm() {
    this.Person = new Person();
  }
}