import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Directive()
export class DesirableSituation extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = DesirableSituation.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'DesirableSituation', 'Desirable Situation');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfIndividualDevelopmentPlan: IndividualDevelopmentPlan[] = [];

  //#endregion

  
  public get SeekInstance(): DesirableSituation {
    return DesirableSituation.SeekInstance();
  }

  public static SeekInstance() : DesirableSituation {
    let desirableSituation: DesirableSituation = new DesirableSituation();
    desirableSituation.isActive = null;
    desirableSituation.ResetPaginate();
    return desirableSituation;
  }

  public static Validate(desirableSituation: DesirableSituation) : boolean {
    let result = Validator.Validate(desirableSituation.title);
    if(result === false)
      console.log('DesirableSituation is unvalid : ', desirableSituation);
    return result;
  }
}