import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';
import { ConnectionType } from '../../Base/ConnectionType/connectionType';


@Directive()
export class PersonConnection extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PersonConnection.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'PersonConnection', 'Person Connection');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public connectionType: ConnectionType = new ConnectionType();
	
	public value: string = '';
	
	public isEmergencyConnection: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): PersonConnection {
    return PersonConnection.SeekInstance();
  }

  public static SeekInstance() : PersonConnection {
    let personConnection: PersonConnection = new PersonConnection();
    personConnection.isEmergencyConnection = null;
    personConnection.ResetPaginate();
    return personConnection;
  }

  public static Validate(personConnection: PersonConnection) : boolean {
    let result = Validator.Validate(personConnection.person) &&
					Validator.Validate(personConnection.connectionType) &&
					Validator.Validate(personConnection.value);
    if(result === false)
      console.log('PersonConnection is unvalid : ', personConnection);
    return result;
  }
}