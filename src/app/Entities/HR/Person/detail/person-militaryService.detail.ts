import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { MilitaryService } from '../../MilitaryService/militaryService';
import { MilitaryServiceMasterUI } from '../../MilitaryService/master/militaryService.master';
import { MilitaryServiceEditUI } from '../../MilitaryService/edit/militaryService.edit';
import { MilitaryServiceDeleteUI } from '../../MilitaryService/delete/militaryService.delete';



@Component({
  selector: 'person-militaryService-detail',
  templateUrl: './person-militaryService.detail.html',
  styleUrls: ['./person-militaryService.detail.css']
})
export class Person_MilitaryService_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public MilitaryServiceList : MilitaryService[] = [];
  
  public currentMilitaryService : MilitaryService = new MilitaryService();

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
      .CollectionOfMilitaryService(this.person)
      .then(militaryServiceList => {
        this.MilitaryServiceList = militaryServiceList;
        this.currentMilitaryService = new MilitaryService();
      });
  }

  public onSelect(i: number) {
    this.currentMilitaryService = this.MilitaryServiceList[i];
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      this.currentMilitaryService = new MilitaryService();
  }

  public onDblClicked(masterUI: MilitaryServiceMasterUI) {
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      return;
    masterUI.ShowDialog(this.currentMilitaryService);
  }

  public onAdd(editUI: MilitaryServiceEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new MilitaryService());
  }

  public onEdit(editUI: MilitaryServiceEditUI) {
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      return;
    editUI.ShowDialog(this.currentMilitaryService);
  }

  public onDelete(deleteUI: MilitaryServiceDeleteUI) {
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      return;
    deleteUI.ShowDialog(this.currentMilitaryService);
  }

  public onEditModal_Closed(militaryService: MilitaryService) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}