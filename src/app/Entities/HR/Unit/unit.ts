import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Position } from '../Position/position';
import { Department } from '../Department/department';
import { PositionDivision } from '../../Base.HR/PositionDivision/positionDivision';


@Directive()
export class Unit extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Unit.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Unit', 'Unit');

  //endregion

  //#region Fields

	public title: string = '';
	
	public department: Department = new Department();
	
	public positionDivision: PositionDivision = new PositionDivision();
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPosition: Position[] = [];

  //#endregion

  
  public get SeekInstance(): Unit {
    return Unit.SeekInstance();
  }

  public static SeekInstance() : Unit {
    let unit: Unit = new Unit();
    unit.isActive = null;
    unit.ResetPaginate();
    return unit;
  }

  public static Validate(unit: Unit) : boolean {
    let result = Validator.Validate(unit.title) &&
					Validator.Validate(unit.department) &&
					Validator.Validate(unit.positionDivision);
    if(result === false)
      console.log('Unit is unvalid : ', unit);
    return result;
  }
}