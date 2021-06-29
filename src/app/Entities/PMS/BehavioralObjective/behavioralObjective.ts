import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralKPI } from '../BehavioralKPI/behavioralKPI';
import { TargetSetting } from '../TargetSetting/targetSetting';
import { CompetencyItem } from '../CompetencyItem/competencyItem';
import { ExpectedLevel } from '../../Base.PMS/ExpectedLevel/expectedLevel';


@Directive()
export class BehavioralObjective extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BehavioralObjective.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'BehavioralObjective', 'Behavioral Objective');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public competencyItem: CompetencyItem = new CompetencyItem();
	
	public title: string = '';
	
	public expectedLevel: ExpectedLevel = new ExpectedLevel();
	
	public weight: number = 0;
	
	public totalKPIWeight: number = 0;
	
	public description: string = '';
	
	public employeeScore: number = 0;
	
  public managerScore: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfBehavioralKPI: BehavioralKPI[] = [];

  //#endregion

  
  public get SeekInstance(): BehavioralObjective {
    return BehavioralObjective.SeekInstance();
  }

  public static SeekInstance() : BehavioralObjective {
    let behavioralObjective: BehavioralObjective = new BehavioralObjective();
    // No Item...
    behavioralObjective.ResetPaginate();
    return behavioralObjective;
  }

  public static Validate(behavioralObjective: BehavioralObjective) : boolean {
    let result = Validator.Validate(behavioralObjective.targetSetting) &&
					Validator.Validate(behavioralObjective.competencyItem) &&
					Validator.Validate(behavioralObjective.title) &&
					Validator.Validate(behavioralObjective.expectedLevel);
    if(result === false)
      console.log('BehavioralObjective is unvalid : ', behavioralObjective);
    return result;
  }
}