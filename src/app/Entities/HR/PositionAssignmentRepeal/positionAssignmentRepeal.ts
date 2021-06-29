import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PositionAssignment } from '../PositionAssignment/positionAssignment';


@Directive()
export class PositionAssignmentRepeal extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PositionAssignmentRepeal.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'PositionAssignmentRepeal', 'Position Assignment Repeal');

  //endregion

  //#region Fields

	public positionAssignment: PositionAssignment = new PositionAssignment();
	
	public date: Date = new Date();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): PositionAssignmentRepeal {
    return PositionAssignmentRepeal.SeekInstance();
  }

  public static SeekInstance() : PositionAssignmentRepeal {
    let positionAssignmentRepeal: PositionAssignmentRepeal = new PositionAssignmentRepeal();
    positionAssignmentRepeal.date = null;
    positionAssignmentRepeal.ResetPaginate();
    return positionAssignmentRepeal;
  }

  public static Validate(positionAssignmentRepeal: PositionAssignmentRepeal) : boolean {
    let result = Validator.Validate(positionAssignmentRepeal.positionAssignment);
    if(result === false)
      console.log('PositionAssignmentRepeal is unvalid : ', positionAssignmentRepeal);
    return result;
  }
}