import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { PersonConnection } from '../../PersonConnection/personConnection';
import { PersonConnectionMasterUI } from '../../PersonConnection/master/personConnection.master';
import { PersonConnectionEditUI } from '../../PersonConnection/edit/personConnection.edit';
import { PersonConnectionDeleteUI } from '../../PersonConnection/delete/personConnection.delete';



@Component({
  selector: 'person-personConnection-detail',
  templateUrl: './person-personConnection.detail.html',
  styleUrls: ['./person-personConnection.detail.css'],
  
})

@Injectable()
export class Person_PersonConnection_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public PersonConnectionList: PersonConnection[] = [];

  public currentPersonConnection: PersonConnection = new PersonConnection();

  private person: Person = new Person();

  @Input()
  public set Person(value: Person) {
    this.person = value;
    this.onReload();
  }

  public get Person(): Person { return this.person }

  public onReload() {
    console.log('Person : ', this.person);
    if (Person.NotConfirm(this.person))
      return;
    this.personService
      .ServiceCollection
      .CollectionOfPersonConnection(this.person)
      .then(personConnectionList => {
        this.PersonConnectionList = personConnectionList;
        this.currentPersonConnection = new PersonConnection();
      });
  }

  public onSelect(i: number) {
    this.currentPersonConnection = this.PersonConnectionList[i];
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      this.currentPersonConnection = new PersonConnection();
  }

  public onDblClicked(masterUI: PersonConnectionMasterUI) {
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      return;
    masterUI.ShowDialog(this.currentPersonConnection);
  }

  public onAdd(editUI: PersonConnectionEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new PersonConnection());
  }

  public onEdit(editUI: PersonConnectionEditUI) {
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      return;
    editUI.ShowDialog(this.currentPersonConnection);
  }

  public onDelete(deleteUI: PersonConnectionDeleteUI) {
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      return;
    deleteUI.ShowDialog(this.currentPersonConnection);
  }

  public onEditModal_Closed(personConnection: PersonConnection) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}