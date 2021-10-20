import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Position } from '../../HR/Position/position';


@Directive()
export class PositionDivision extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PositionDivision.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'PositionDivision', 'PositionDivision');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPosition: Position[] = [];

  //#endregion

  
  public get SeekInstance(): PositionDivision {
    return PositionDivision.SeekInstance();
  }

  public static SeekInstance() : PositionDivision {
    let positionDivision: PositionDivision = new PositionDivision();
    positionDivision.isActive = null;
    positionDivision.ResetPaginate();
    return positionDivision;
  }

  public static Validate(positionDivision: PositionDivision) : boolean {
    let result = Validator.Validate(positionDivision.title);
    if(result === false)
      console.log('PositionDivision is unvalid : ', positionDivision);
    return result;
  }
}
