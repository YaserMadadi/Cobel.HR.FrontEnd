import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Country } from '../country';
import { CountryService } from '../country.service';

import { Person } from '../../../HR/Person/person';
import { PersonMasterUI } from '../../../HR/Person/master/person.master';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { PersonDeleteUI } from '../../../HR/Person/delete/person.delete';



@Component({
  selector: 'nationality-person-detail',
  templateUrl: './nationality-person.detail.html',
  styleUrls: ['./nationality-person.detail.css'],
  providers: [CountryService]
}) 

@Injectable()
export class Nationality_Person_DetailUI extends DetailView<Country> {

  constructor(private countryService: CountryService) {
    super(countryService);
  }

  public PersonList : Person[] = [];
  
  public currentPerson : Person = new Person();

  private nationality: Country = new Country();

  @Input()
  public set Nationality(value: Country) {
    this.nationality = value;
    this.onReload();
  }

  public get Nationality(): Country { return this.nationality }

  public onReload(){
    if (Country.NotConfirm(this.nationality))
      return;
    this.countryService
      .ServiceCollection
      .CollectionOfPerson_Nationality(this.nationality)
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
    editUI.Nationality = this.nationality;
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