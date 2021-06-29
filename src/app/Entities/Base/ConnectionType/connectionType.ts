import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CoachConnectionLine } from '../../LAD/CoachConnectionLine/coachConnectionLine';
import { AssessorConnectionLine } from '../../LAD/AssessorConnectionLine/assessorConnectionLine';
import { PersonConnection } from '../../HR/PersonConnection/personConnection';


@Directive()
export class ConnectionType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ConnectionType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'ConnectionType', 'Connection Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfCoachConnectionLine: CoachConnectionLine[] = [];
	
	public listOfAssessorConnectionLine: AssessorConnectionLine[] = [];
	
	public listOfPersonConnection: PersonConnection[] = [];

  //#endregion

  
  public get SeekInstance(): ConnectionType {
    return ConnectionType.SeekInstance();
  }

  public static SeekInstance() : ConnectionType {
    let connectionType: ConnectionType = new ConnectionType();
    connectionType.isActive = null;
    connectionType.ResetPaginate();
    return connectionType;
  }

  public static Validate(connectionType: ConnectionType) : boolean {
    let result = Validator.Validate(connectionType.title);
    if(result === false)
      console.log('ConnectionType is unvalid : ', connectionType);
    return result;
  }
}