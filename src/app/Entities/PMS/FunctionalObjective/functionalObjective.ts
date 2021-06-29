import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { FunctionalObjectiveComment } from '../FunctionalObjectiveComment/functionalObjectiveComment';
import { FunctionalKPI } from '../FunctionalKPI/functionalKPI';
import { TargetSetting } from '../TargetSetting/targetSetting';


@Directive()
export class FunctionalObjective extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number, descriptor: string, info: Info, recursive: boolean);
  constructor(id: number = 0, descriptor: string = '', info: Info = FunctionalObjective.Info, recursive: boolean = true) {
	
    super(id, descriptor, info);
    if (recursive === true) 
      this.parentalFunctionalObjective = new FunctionalObjective(id, descriptor, info, false);
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'FunctionalObjective', 'Functional Objective');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public parentalFunctionalObjective: FunctionalObjective;
	
	public individualObjective: string = '';
	
	public weight: number = 0;
	
	public description: string = '';
	
	public totalKPIWeight: number = 0;
	
	public employeeScore: number = 0;
	
  public managerScore: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfFunctionalObjectiveComment: FunctionalObjectiveComment[] = [];
	
	public listOfChildFunctionalObjective: FunctionalObjective[] = [];
	
	public listOfFunctionalKPI: FunctionalKPI[] = [];

  //#endregion

  
  public get SeekInstance(): FunctionalObjective {
    return FunctionalObjective.SeekInstance();
  }

  public static SeekInstance() : FunctionalObjective {
    let functionalObjective: FunctionalObjective = new FunctionalObjective();
    // No Item...
    functionalObjective.ResetPaginate();
    return functionalObjective;
  }

  public static Validate(functionalObjective: FunctionalObjective) : boolean {
    let result = Validator.Validate(functionalObjective.targetSetting) &&
					Validator.Validate(functionalObjective.individualObjective);
    if(result === false)
      console.log('FunctionalObjective is unvalid : ', functionalObjective);
    return result;
  }
}