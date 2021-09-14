import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { City } from '../city';
import { CityService } from '../city.service';

import { Person } from '../../../HR/Person/person';
import { PersonMasterUI } from '../../../HR/Person/master/person.master';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { PersonDeleteUI } from '../../../HR/Person/delete/person.delete';



@Component({
  selector: 'birthCity-person-detail',
  templateUrl: './birthCity-person.detail.html',
  styleUrls: ['./birthCity-person.detail.css'],
}) 

@Injectable()
export class BirthCity_Person_DetailUI extends DetailView<City> {

  constructor(private cityService: CityService) {
    super(cityService);
  }

  public PersonList : Person[] = [];
  
  public currentPerson : Person = new Person();

  private birthCity: City = new City();

  @Input()
  public set BirthCity(value: City) {
    this.birthCity = value;
    this.onReload();
  }

  public get BirthCity(): City { return this.birthCity }

  public onReload(){
    if (City.NotConfirm(this.birthCity))
      return;
    this.cityService
      .ServiceCollection
      .CollectionOfPerson_BirthCity(this.birthCity)
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
    editUI.BirthCity = this.birthCity;
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