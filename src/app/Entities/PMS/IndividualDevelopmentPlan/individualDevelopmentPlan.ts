import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { DevelopmentPlanCompetency } from '../DevelopmentPlanCompetency/developmentPlanCompetency';
import { Vision } from '../Vision/vision';
import { DevelopmentPlanPriority } from '../../Base.PMS/DevelopmentPlanPriority/developmentPlanPriority';
import { Subject } from '../../Base.PMS/Subject/subject';
import { CurrentSituation } from '../../Base.PMS/CurrentSituation/currentSituation';
import { DesirableSituation } from '../../Base.PMS/DesirableSituation/desirableSituation';


@Directive()
export class IndividualDevelopmentPlan extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = IndividualDevelopmentPlan.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'IndividualDevelopmentPlan', 'Individual Development Plan');

  //endregion

  //#region Fields

	public vision: Vision = new Vision();
	
	public priority: DevelopmentPlanPriority = new DevelopmentPlanPriority();
	
	public subject: Subject = new Subject();
	
	public title: string = '';
	
	public currentSituation: CurrentSituation = new CurrentSituation();
	
	public desirableSituation: DesirableSituation = new DesirableSituation();
	
	public fromDate: Date = new Date();
	
	public toDate: Date = new Date();
	
	public effectiveNessIndex: string = '';

	//#endregion

  //#region Collection Properties

  public listOfDevelopmentPlanCompetency: DevelopmentPlanCompetency[] = [];

  //#endregion

  
  public get SeekInstance(): IndividualDevelopmentPlan {
    return IndividualDevelopmentPlan.SeekInstance();
  }

  public static SeekInstance() : IndividualDevelopmentPlan {
    let individualDevelopmentPlan: IndividualDevelopmentPlan = new IndividualDevelopmentPlan();
    individualDevelopmentPlan.fromDate = null;
		individualDevelopmentPlan.toDate = null;
    individualDevelopmentPlan.ResetPaginate();
    return individualDevelopmentPlan;
  }

  public static Validate(individualDevelopmentPlan: IndividualDevelopmentPlan) : boolean {
    let result = Validator.Validate(individualDevelopmentPlan.vision) &&
					Validator.Validate(individualDevelopmentPlan.priority) &&
					Validator.Validate(individualDevelopmentPlan.subject) &&
					Validator.Validate(individualDevelopmentPlan.title) &&
					Validator.Validate(individualDevelopmentPlan.currentSituation) &&
					Validator.Validate(individualDevelopmentPlan.desirableSituation) &&
					Validator.Validate(individualDevelopmentPlan.effectiveNessIndex);
    if(result === false)
      console.log('IndividualDevelopmentPlan is unvalid : ', individualDevelopmentPlan);
    return result;
  }
}