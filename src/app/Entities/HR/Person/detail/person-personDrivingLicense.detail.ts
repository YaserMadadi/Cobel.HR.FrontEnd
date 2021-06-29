import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { PersonDrivingLicense } from '../../PersonDrivingLicense/personDrivingLicense';
import { PersonDrivingLicenseMasterUI } from '../../PersonDrivingLicense/master/personDrivingLicense.master';
import { PersonDrivingLicenseEditUI } from '../../PersonDrivingLicense/edit/personDrivingLicense.edit';
import { PersonDrivingLicenseDeleteUI } from '../../PersonDrivingLicense/delete/personDrivingLicense.delete';



@Component({
  selector: 'person-personDrivingLicense-detail',
  templateUrl: './person-personDrivingLicense.detail.html',
  styleUrls: ['./person-personDrivingLicense.detail.css'],
  providers: [PersonService]
}) 

@Injectable()
export class Person_PersonDrivingLicense_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public PersonDrivingLicenseList : PersonDrivingLicense[] = [];
  
  public currentPersonDrivingLicense : PersonDrivingLicense = new PersonDrivingLicense();

  private person: Person = new Person();

  @Input()
  public set Person(value: Person) {
    this.person = value;
    this.onReload();
  }

  public get Person(): Person { return this.person }

  public onReload(){
    if (Person.NotConfirm(this.person))
      return;
    this.personService
      .ServiceCollection
      .CollectionOfPersonDrivingLicense(this.person)
      .then(personDrivingLicenseList => {
        this.PersonDrivingLicenseList = personDrivingLicenseList;
        this.currentPersonDrivingLicense = new PersonDrivingLicense();
      });
  }

  public onSelect(i: number) {
    this.currentPersonDrivingLicense = this.PersonDrivingLicenseList[i];
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      this.currentPersonDrivingLicense = new PersonDrivingLicense();
  }

  public onDblClicked(masterUI: PersonDrivingLicenseMasterUI) {
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      return;
    masterUI.ShowDialog(this.currentPersonDrivingLicense);
  }

  public onAdd(editUI: PersonDrivingLicenseEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new PersonDrivingLicense());
  }

  public onEdit(editUI: PersonDrivingLicenseEditUI) {
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      return;
    editUI.ShowDialog(this.currentPersonDrivingLicense);
  }

  public onDelete(deleteUI: PersonDrivingLicenseDeleteUI) {
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      return;
    deleteUI.ShowDialog(this.currentPersonDrivingLicense);
  }

  public onEditModal_Closed(personDrivingLicense: PersonDrivingLicense) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}