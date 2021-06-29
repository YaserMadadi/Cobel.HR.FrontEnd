import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { Passport } from '../../Passport/passport';
import { PassportMasterUI } from '../../Passport/master/passport.master';
import { PassportEditUI } from '../../Passport/edit/passport.edit';
import { PassportDeleteUI } from '../../Passport/delete/passport.delete';



@Component({
  selector: 'person-passport-detail',
  templateUrl: './person-passport.detail.html',
  styleUrls: ['./person-passport.detail.css'],
  providers: [PersonService]
}) 

@Injectable()
export class Person_Passport_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public PassportList : Passport[] = [];
  
  public currentPassport : Passport = new Passport();

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
      .CollectionOfPassport(this.person)
      .then(passportList => {
        this.PassportList = passportList;
        this.currentPassport = new Passport();
      });
  }

  public onSelect(i: number) {
    this.currentPassport = this.PassportList[i];
    if (Passport.NotConfirm(this.currentPassport))
      this.currentPassport = new Passport();
  }

  public onDblClicked(masterUI: PassportMasterUI) {
    if (Passport.NotConfirm(this.currentPassport))
      return;
    masterUI.ShowDialog(this.currentPassport);
  }

  public onAdd(editUI: PassportEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new Passport());
  }

  public onEdit(editUI: PassportEditUI) {
    if (Passport.NotConfirm(this.currentPassport))
      return;
    editUI.ShowDialog(this.currentPassport);
  }

  public onDelete(deleteUI: PassportDeleteUI) {
    if (Passport.NotConfirm(this.currentPassport))
      return;
    deleteUI.ShowDialog(this.currentPassport);
  }

  public onEditModal_Closed(passport: Passport) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}