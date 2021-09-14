import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { Habitancy } from '../../Habitancy/habitancy';
import { HabitancyMasterUI } from '../../Habitancy/master/habitancy.master';
import { HabitancyEditUI } from '../../Habitancy/edit/habitancy.edit';
import { HabitancyDeleteUI } from '../../Habitancy/delete/habitancy.delete';



@Component({
  selector: 'person-habitancy-detail',
  templateUrl: './person-habitancy.detail.html',
  styleUrls: ['./person-habitancy.detail.css']
})
export class Person_Habitancy_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public HabitancyList : Habitancy[] = [];
  
  public currentHabitancy : Habitancy = new Habitancy();

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
      .CollectionOfHabitancy(this.person)
      .then(habitancyList => {
        this.HabitancyList = habitancyList;
        this.currentHabitancy = new Habitancy();
      });
  }

  public onSelect(i: number) {
    this.currentHabitancy = this.HabitancyList[i];
    if (Habitancy.NotConfirm(this.currentHabitancy))
      this.currentHabitancy = new Habitancy();
  }

  public onDblClicked(masterUI: HabitancyMasterUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    masterUI.ShowDialog(this.currentHabitancy);
  }

  public onAdd(editUI: HabitancyEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new Habitancy());
  }

  public onEdit(editUI: HabitancyEditUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    editUI.ShowDialog(this.currentHabitancy);
  }

  public onDelete(deleteUI: HabitancyDeleteUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    deleteUI.ShowDialog(this.currentHabitancy);
  }

  public onEditModal_Closed(habitancy: Habitancy) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}