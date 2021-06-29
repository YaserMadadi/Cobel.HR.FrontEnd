import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { SchoolHistory } from '../../SchoolHistory/schoolHistory';
import { SchoolHistoryMasterUI } from '../../SchoolHistory/master/schoolHistory.master';
import { SchoolHistoryEditUI } from '../../SchoolHistory/edit/schoolHistory.edit';
import { SchoolHistoryDeleteUI } from '../../SchoolHistory/delete/schoolHistory.delete';



@Component({
  selector: 'person-schoolHistory-detail',
  templateUrl: './person-schoolHistory.detail.html',
  styleUrls: ['./person-schoolHistory.detail.css'],
  providers: [PersonService]
}) 

@Injectable()
export class Person_SchoolHistory_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public SchoolHistoryList : SchoolHistory[] = [];
  
  public currentSchoolHistory : SchoolHistory = new SchoolHistory();

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
      .CollectionOfSchoolHistory(this.person)
      .then(schoolHistoryList => {
        this.SchoolHistoryList = schoolHistoryList;
        this.currentSchoolHistory = new SchoolHistory();
      });
  }

  public onSelect(i: number) {
    this.currentSchoolHistory = this.SchoolHistoryList[i];
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      this.currentSchoolHistory = new SchoolHistory();
  }

  public onDblClicked(masterUI: SchoolHistoryMasterUI) {
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      return;
    masterUI.ShowDialog(this.currentSchoolHistory);
  }

  public onAdd(editUI: SchoolHistoryEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new SchoolHistory());
  }

  public onEdit(editUI: SchoolHistoryEditUI) {
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      return;
    editUI.ShowDialog(this.currentSchoolHistory);
  }

  public onDelete(deleteUI: SchoolHistoryDeleteUI) {
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      return;
    deleteUI.ShowDialog(this.currentSchoolHistory);
  }

  public onEditModal_Closed(schoolHistory: SchoolHistory) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}