import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Religion } from '../religion';
import { ReligionService } from '../religion.service';

import { Person } from '../../../HR/Person/person';
import { PersonMasterUI } from '../../../HR/Person/master/person.master';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { PersonDeleteUI } from '../../../HR/Person/delete/person.delete';



@Component({
  selector: 'religion-person-detail',
  templateUrl: './religion-person.detail.html',
  styleUrls: ['./religion-person.detail.css'],
  providers: [ReligionService]
}) 

@Injectable()
export class Religion_Person_DetailUI extends DetailView<Religion> {

  constructor(private religionService: ReligionService) {
    super(religionService);
  }

  public PersonList : Person[] = [];
  
  public currentPerson : Person = new Person();

  private religion: Religion = new Religion();

  @Input()
  public set Religion(value: Religion) {
    this.religion = value;
    this.onReload();
  }

  public get Religion(): Religion { return this.religion }

  public onReload(){
    if (Religion.NotConfirm(this.religion))
      return;
    this.religionService
      .ServiceCollection
      .CollectionOfPerson(this.religion)
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
    editUI.Religion = this.religion;
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