import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';

import { Person } from '../../../HR/Person/person';
import { PersonMasterUI } from '../../../HR/Person/master/person.master';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { PersonDeleteUI } from '../../../HR/Person/delete/person.delete';



@Component({
  selector: 'gender-person-detail',
  templateUrl: './gender-person.detail.html',
  styleUrls: ['./gender-person.detail.css'],
  providers: [GenderService]
}) 

@Injectable()
export class Gender_Person_DetailUI extends DetailView<Gender> {

  constructor(private genderService: GenderService) {
    super(genderService);
  }

  public PersonList : Person[] = [];
  
  public currentPerson : Person = new Person();

  private gender: Gender = new Gender();

  @Input()
  public set Gender(value: Gender) {
    this.gender = value;
    this.onReload();
  }

  public get Gender(): Gender { return this.gender }

  public onReload(){
    if (Gender.NotConfirm(this.gender))
      return;
    this.genderService
      .ServiceCollection
      .CollectionOfPerson(this.gender)
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
    editUI.Gender = this.gender;
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