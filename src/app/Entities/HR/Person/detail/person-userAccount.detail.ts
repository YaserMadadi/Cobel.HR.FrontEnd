import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { UserAccount } from '../../../Core/UserAccount/userAccount';
import { UserAccountMasterUI } from '../../../Core/UserAccount/master/userAccount.master';
import { UserAccountEditUI } from '../../../Core/UserAccount/edit/userAccount.edit';
import { UserAccountDeleteUI } from '../../../Core/UserAccount/delete/userAccount.delete';



@Component({
  selector: 'person-userAccount-detail',
  templateUrl: './person-userAccount.detail.html',
  styleUrls: ['./person-userAccount.detail.css'],
  providers: [PersonService]
}) 

@Injectable()
export class Person_UserAccount_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public UserAccountList : UserAccount[] = [];
  
  public currentUserAccount : UserAccount = new UserAccount();

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
      .CollectionOfUserAccount(this.person)
      .then(userAccountList => {
        this.UserAccountList = userAccountList;
        this.currentUserAccount = new UserAccount();
      });
  }

  public onSelect(i: number) {
    this.currentUserAccount = this.UserAccountList[i];
    if (UserAccount.NotConfirm(this.currentUserAccount))
      this.currentUserAccount = new UserAccount();
  }

  public onDblClicked(masterUI: UserAccountMasterUI) {
    if (UserAccount.NotConfirm(this.currentUserAccount))
      return;
    masterUI.ShowDialog(this.currentUserAccount);
  }

  public onAdd(editUI: UserAccountEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new UserAccount());
  }

  public onEdit(editUI: UserAccountEditUI) {
    if (UserAccount.NotConfirm(this.currentUserAccount))
      return;
    editUI.ShowDialog(this.currentUserAccount);
  }

  public onDelete(deleteUI: UserAccountDeleteUI) {
    if (UserAccount.NotConfirm(this.currentUserAccount))
      return;
    deleteUI.ShowDialog(this.currentUserAccount);
  }

  public onEditModal_Closed(userAccount: UserAccount) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}