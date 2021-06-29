import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Coach } from '../Coach/coach';
import { ConnectionType } from '../../Base/ConnectionType/connectionType';


@Directive()
export class CoachConnectionLine extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CoachConnectionLine.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'CoachConnectionLine', 'Coach Connection Line');

  //endregion

  //#region Fields

	public coach: Coach = new Coach();
	
	public connectionType: ConnectionType = new ConnectionType();
	
	public number: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): CoachConnectionLine {
    return CoachConnectionLine.SeekInstance();
  }

  public static SeekInstance() : CoachConnectionLine {
    let coachConnectionLine: CoachConnectionLine = new CoachConnectionLine();
    // No Item...
    coachConnectionLine.ResetPaginate();
    return coachConnectionLine;
  }

  public static Validate(coachConnectionLine: CoachConnectionLine) : boolean {
    let result = Validator.Validate(coachConnectionLine.coach) &&
					Validator.Validate(coachConnectionLine.connectionType) &&
					Validator.Validate(coachConnectionLine.number);
    if(result === false)
      console.log('CoachConnectionLine is unvalid : ', coachConnectionLine);
    return result;
  }
}