import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MaritalStatus } from '../maritalStatus';
import { MaritalStatusService } from '../maritalStatus.service';

import { Person } from '../../../HR/Person/person';
import { PersonMasterUI } from '../../../HR/Person/master/person.master';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { PersonDeleteUI } from '../../../HR/Person/delete/person.delete';



@Component({
  selector: 'maritalStatus-person-detail',
  templateUrl: './maritalStatus-person.detail.html',
  styleUrls: ['./maritalStatus-person.detail.css']
})
export class MaritalStatus_Person_DetailUI extends DetailView<MaritalStatus> {

  constructor(private maritalStatusService: MaritalStatusService) {
    super(maritalStatusService);
  }

  public PersonList : Person[] = [];
  
  public currentPerson : Person = new Person();

  private maritalStatus: MaritalStatus = new MaritalStatus();

  @Input()
  public set MaritalStatus(value: MaritalStatus) {
    this.maritalStatus = value;
    this.onReload();
  }

  public get MaritalStatus(): MaritalStatus { return this.maritalStatus }

  public onReload(){
    if (MaritalStatus.NotConfirm(this.maritalStatus))
      return;
    this.maritalStatusService
      .ServiceCollection
      .CollectionOfPerson(this.maritalStatus)
      .then(personList => {
        this.PersonList = personList;
        this.currentPerson = new Person();
      });
  }

  public onSelect(i: number) {
    this.currentPerson = this.PersonList[i];
    if (Person.NotConfirm(this.currentPerson))
      this.currentPerson = new Person();
  }

  public onDblClicked(masterUI: PersonMasterUI) {
    if (Person.NotConfirm(this.currentPerson))
      return;
    masterUI.ShowDialog(this.currentPerson);
  }

  public onAdd(editUI: PersonEditUI) {
    editUI.MaritalStatus = this.maritalStatus;
    editUI.ShowDialog(new Person());
  }

  public onEdit(editUI: PersonEditUI) {
    if (Person.NotConfirm(this.currentPerson))
      return;
    editUI.ShowDialog(this.currentPerson);
  }

  public onDelete(deleteUI: PersonDeleteUI) {
    if (Person.NotConfirm(this.currentPerson))
      return;
    deleteUI.ShowDialog(this.currentPerson);
  }

  public onEditModal_Closed(person: Person) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
