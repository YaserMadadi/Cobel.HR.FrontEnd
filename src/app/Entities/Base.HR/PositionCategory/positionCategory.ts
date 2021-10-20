import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Unit } from '../../HR/Unit/unit';
import { AppraisalApproverConfig } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig';
import { Position } from '../../HR/Position/position';


@Directive()
export class PositionCategory extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PositionCategory.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'PositionCategory', 'PositionCategory');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfUnit: Unit[] = [];
	
	public listOfDepartmentCategory_AppraisalApproverConfig: AppraisalApproverConfig[] = [];
	
	public listOfPosition: Position[] = [];

  //#endregion

  
  public get SeekInstance(): PositionCategory {
    return PositionCategory.SeekInstance();
  }

  public static SeekInstance() : PositionCategory {
    let positionCategory: PositionCategory = new PositionCategory();
    positionCategory.isActive = null;
    positionCategory.ResetPaginate();
    return positionCategory;
  }

  public static Validate(positionCategory: PositionCategory) : boolean {
    let result = Validator.Validate(positionCategory.title);
    if(result === false)
      console.log('PositionCategory is unvalid : ', positionCategory);
    return result;
  }
}
