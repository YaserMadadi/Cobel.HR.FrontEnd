import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PositionAssignmentRepeal } from '../PositionAssignmentRepeal/positionAssignmentRepeal';
import { Employee } from '../Employee/employee';
import { Position } from '../Position/position';


@Directive()
export class PositionAssignment extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PositionAssignment.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'PositionAssignment', 'Position Assignment');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public position: Position = new Position();
	
	public fromDate: Date = new Date();
	
	public comment: string = '';
	
	public isAlive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPositionAssignmentRepeal: PositionAssignmentRepeal[] = [];

  //#endregion

  
  public get SeekInstance(): PositionAssignment {
    return PositionAssignment.SeekInstance();
  }

  public static SeekInstance() : PositionAssignment {
    let positionAssignment: PositionAssignment = new PositionAssignment();
    positionAssignment.fromDate = null;
		positionAssignment.isAlive = null;
    positionAssignment.ResetPaginate();
    return positionAssignment;
  }

  public static Validate(positionAssignment: PositionAssignment) : boolean {
    let result = Validator.Validate(positionAssignment.employee) &&
					Validator.Validate(positionAssignment.position);
    if(result === false)
      console.log('PositionAssignment is unvalid : ', positionAssignment);
    return result;
  }
}