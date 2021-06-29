import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { PersonCertificate } from '../../PersonCertificate/personCertificate';
import { PersonCertificateMasterUI } from '../../PersonCertificate/master/personCertificate.master';
import { PersonCertificateEditUI } from '../../PersonCertificate/edit/personCertificate.edit';
import { PersonCertificateDeleteUI } from '../../PersonCertificate/delete/personCertificate.delete';



@Component({
  selector: 'person-personCertificate-detail',
  templateUrl: './person-personCertificate.detail.html',
  styleUrls: ['./person-personCertificate.detail.css'],
  providers: [PersonService]
}) 

@Injectable()
export class Person_PersonCertificate_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public PersonCertificateList : PersonCertificate[] = [];
  
  public currentPersonCertificate : PersonCertificate = new PersonCertificate();

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
      .CollectionOfPersonCertificate(this.person)
      .then(personCertificateList => {
        this.PersonCertificateList = personCertificateList;
        this.currentPersonCertificate = new PersonCertificate();
      });
  }

  public onSelect(i: number) {
    this.currentPersonCertificate = this.PersonCertificateList[i];
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      this.currentPersonCertificate = new PersonCertificate();
  }

  public onDblClicked(masterUI: PersonCertificateMasterUI) {
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      return;
    masterUI.ShowDialog(this.currentPersonCertificate);
  }

  public onAdd(editUI: PersonCertificateEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new PersonCertificate());
  }

  public onEdit(editUI: PersonCertificateEditUI) {
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      return;
    editUI.ShowDialog(this.currentPersonCertificate);
  }

  public onDelete(deleteUI: PersonCertificateDeleteUI) {
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      return;
    deleteUI.ShowDialog(this.currentPersonCertificate);
  }

  public onEditModal_Closed(personCertificate: PersonCertificate) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}