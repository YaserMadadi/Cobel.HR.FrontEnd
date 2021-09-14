import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { UserAccount } from '../userAccount';
import { UserAccountService } from '../userAccount.service';
import { Person } from '../../../HR/Person/person';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';



@Component({
  selector: 'core-userAccount-edit',
  templateUrl: './userAccount.edit.html',
  styleUrls: ['./userAccount.edit.css']
})
export class UserAccountEditUI extends EditModal<UserAccount> implements IEditModal<UserAccount>  {
  
  constructor(private userAccountService: UserAccountService) {
    super(userAccountService); 
    this.currentInstance = new UserAccount();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.userAccountService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#endregion

  @ViewChild('userAccountEditUI')
  private userAccountEditUI: NgForm;

  Init(userAccount: UserAccount = new UserAccount()) {
    if (userAccount.isNew)
      this.userAccountEditUI.reset();
    this.InitUserAccount(userAccount);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitUserAccount(userAccount: UserAccount){
    this.currentInstance = this.service.CreateInstance();
    if (!userAccount.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = userAccount.person;
    } else {
      userAccount.person = this.personComponent.instance;
    }
    this.currentInstance = userAccount;
  }

  ResetForm() {
    this.Person = new Person();
  }
}