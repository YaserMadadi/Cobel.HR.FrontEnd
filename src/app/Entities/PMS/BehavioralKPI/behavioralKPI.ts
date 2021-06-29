import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralAppraise } from '../BehavioralAppraise/behavioralAppraise';
import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { CompetencyItemKPI } from '../CompetencyItemKPI/competencyItemKPI';


@Directive()
export class BehavioralKPI extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BehavioralKPI.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'BehavioralKPI', 'Behavioral KPI');

  //endregion

  //#region Fields

	public behavioralObjective: BehavioralObjective = new BehavioralObjective();
	
	public competencyItemKPI: CompetencyItemKPI = new CompetencyItemKPI();
	
	public weight: number = 0;
	
	public employeeScore: number = 0;
	
	public managerScore: number = 0;


	//#endregion

  //#region Collection Properties

  public listOfBehavioralAppraise: BehavioralAppraise[] = [];

  //#endregion

  
  public get SeekInstance(): BehavioralKPI {
    return BehavioralKPI.SeekInstance();
  }

  public static SeekInstance() : BehavioralKPI {
    let behavioralKPI: BehavioralKPI = new BehavioralKPI();
    // No Item...
    behavioralKPI.ResetPaginate();
    return behavioralKPI;
  }

  public static Validate(behavioralKPI: BehavioralKPI) : boolean {
    let result = Validator.Validate(behavioralKPI.behavioralObjective) &&
					Validator.Validate(behavioralKPI.competencyItemKPI);
    if(result === false)
      console.log('BehavioralKPI is unvalid : ', behavioralKPI);
    return result;
  }
}