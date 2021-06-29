import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { UniversityHistory } from '../../UniversityHistory/universityHistory';
import { UniversityHistoryMasterUI } from '../../UniversityHistory/master/universityHistory.master';
import { UniversityHistoryEditUI } from '../../UniversityHistory/edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from '../../UniversityHistory/delete/universityHistory.delete';



@Component({
  selector: 'person-universityHistory-detail',
  templateUrl: './person-universityHistory.detail.html',
  styleUrls: ['./person-universityHistory.detail.css'],
  providers: [PersonService]
}) 

@Injectable()
export class Person_UniversityHistory_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public UniversityHistoryList : UniversityHistory[] = [];
  
  public currentUniversityHistory : UniversityHistory = new UniversityHistory();

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
      .CollectionOfUniversityHistory(this.person)
      .then(universityHistoryList => {
        this.UniversityHistoryList = universityHistoryList;
        this.currentUniversityHistory = new UniversityHistory();
      });
  }

  public onSelect(i: number) {
    this.currentUniversityHistory = this.UniversityHistoryList[i];
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      this.currentUniversityHistory = new UniversityHistory();
  }

  public onDblClicked(masterUI: UniversityHistoryMasterUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    masterUI.ShowDialog(this.currentUniversityHistory);
  }

  public onAdd(editUI: UniversityHistoryEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new UniversityHistory());
  }

  public onEdit(editUI: UniversityHistoryEditUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    editUI.ShowDialog(this.currentUniversityHistory);
  }

  public onDelete(deleteUI: UniversityHistoryDeleteUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    deleteUI.ShowDialog(this.currentUniversityHistory);
  }

  public onEditModal_Closed(universityHistory: UniversityHistory) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}