import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { HealthStatus } from '../healthStatus';
import { HealthStatusService } from '../healthStatus.service';

import { Person } from '../../../HR/Person/person';
import { PersonMasterUI } from '../../../HR/Person/master/person.master';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { PersonDeleteUI } from '../../../HR/Person/delete/person.delete';



@Component({
  selector: 'healthStatus-person-detail',
  templateUrl: './healthStatus-person.detail.html',
  styleUrls: ['./healthStatus-person.detail.css']
})
export class HealthStatus_Person_DetailUI extends DetailView<HealthStatus> {

  constructor(private healthStatusService: HealthStatusService) {
    super(healthStatusService);
  }

  public PersonList : Person[] = [];
  
  public currentPerson : Person = new Person();

  private healthStatus: HealthStatus = new HealthStatus();

  @Input()
  public set HealthStatus(value: HealthStatus) {
    this.healthStatus = value;
    this.onReload();
  }

  public get HealthStatus(): HealthStatus { return this.healthStatus }

  public onReload(){
    if (HealthStatus.NotConfirm(this.healthStatus))
      return;
    this.healthStatusService
      .ServiceCollection
      .CollectionOfPerson(this.healthStatus)
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
    editUI.HealthStatus = this.healthStatus;
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