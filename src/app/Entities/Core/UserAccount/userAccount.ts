import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';


@Directive()
export class UserAccount extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = UserAccount.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'UserAccount', 'User Account');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public userName: string = '';
	
	public password: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): UserAccount {
    return UserAccount.SeekInstance();
  }

  public static SeekInstance() : UserAccount {
    let userAccount: UserAccount = new UserAccount();
    userAccount.isActive = null;
    userAccount.ResetPaginate();
    return userAccount;
  }

  public static Validate(userAccount: UserAccount) : boolean {
    let result = Validator.Validate(userAccount.person) &&
					Validator.Validate(userAccount.userName) &&
					Validator.Validate(userAccount.password);
    if(result === false)
      console.log('UserAccount is unvalid : ', userAccount);
    return result;
  }
}