import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { Log } from '../../../Core/Log/log';
import { LogMasterUI } from '../../../Core/Log/master/log.master';
import { LogEditUI } from '../../../Core/Log/edit/log.edit';
import { LogDeleteUI } from '../../../Core/Log/delete/log.delete';



@Component({
  selector: 'person-log-detail',
  templateUrl: './person-log.detail.html',
  styleUrls: ['./person-log.detail.css']
})
export class Person_Log_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public LogList : Log[] = [];
  
  public currentLog : Log = new Log();

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
      .CollectionOfLog(this.person)
      .then(logList => {
        this.LogList = logList;
        this.currentLog = new Log();
      });
  }

  public onSelect(i: number) {
    this.currentLog = this.LogList[i];
    if (Log.NotConfirm(this.currentLog))
      this.currentLog = new Log();
  }

  public onDblClicked(masterUI: LogMasterUI) {
    if (Log.NotConfirm(this.currentLog))
      return;
    masterUI.ShowDialog(this.currentLog);
  }

  public onAdd(editUI: LogEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new Log());
  }

  public onEdit(editUI: LogEditUI) {
    if (Log.NotConfirm(this.currentLog))
      return;
    editUI.ShowDialog(this.currentLog);
  }

  public onDelete(deleteUI: LogDeleteUI) {
    if (Log.NotConfirm(this.currentLog))
      return;
    deleteUI.ShowDialog(this.currentLog);
  }

  public onEditModal_Closed(log: Log) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}