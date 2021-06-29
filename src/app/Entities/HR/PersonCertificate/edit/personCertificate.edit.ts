import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PersonCertificate } from '../personCertificate';
import { PersonCertificateService } from '../personCertificate.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { FieldCategory } from '../../../Base/FieldCategory/fieldCategory';
import { FieldCategoryEditUI } from '../../../Base/FieldCategory/edit/fieldCategory.edit';



@Component({
  selector: 'hr-personCertificate-edit',
  templateUrl: './personCertificate.edit.html',
  styleUrls: ['./personCertificate.edit.css']
})
export class PersonCertificateEditUI extends EditModal<PersonCertificate> implements IEditModal<PersonCertificate>  {
  
  constructor(private personCertificateService: PersonCertificateService) {
    super(personCertificateService); 
    this.currentInstance = new PersonCertificate();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.personCertificateService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- FieldCategory --

  fieldCategoryComponent : ForeignComponent<FieldCategory> = new ForeignComponent<FieldCategory>(this.personCertificateService.FieldCategoryService);

  @Input()
  public set FieldCategory(value: FieldCategory) {
    this.currentInstance.fieldCategory = this.fieldCategoryComponent.instance = value;
  }  


  //#endregion -- FieldCategory --
	//#endregion

  @ViewChild('personCertificateEditUI')
  private personCertificateEditUI: NgForm;

  Init(personCertificate: PersonCertificate = new PersonCertificate()) {
    if (personCertificate.isNew)
      this.personCertificateEditUI.reset();
    this.InitPersonCertificate(personCertificate);
    this.loadLists();
  }

  private loadLists() {
    
    this.fieldCategoryComponent.LoadList();
  }
  
  InitPersonCertificate(personCertificate: PersonCertificate) {
    if (!personCertificate.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = personCertificate.person;
			this.fieldCategoryComponent.instance = personCertificate.fieldCategory;
    } else {
      personCertificate.person = this.personComponent.instance;
			personCertificate.fieldCategory = this.fieldCategoryComponent.instance;
    }
    this.currentInstance = personCertificate;
  }

  ResetForm() {
    this.Person = new Person();
		this.FieldCategory = new FieldCategory();
  }
}