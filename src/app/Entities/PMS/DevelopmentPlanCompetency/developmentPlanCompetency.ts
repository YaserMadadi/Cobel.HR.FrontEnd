import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { IndividualDevelopmentPlan } from '../IndividualDevelopmentPlan/individualDevelopmentPlan';
import { CompetencyItem } from '../CompetencyItem/competencyItem';


@Directive()
export class DevelopmentPlanCompetency extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = DevelopmentPlanCompetency.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'DevelopmentPlanCompetency', 'Development Plan Competency');

  //endregion

  //#region Fields

	public individualDevelopmentPlan: IndividualDevelopmentPlan = new IndividualDevelopmentPlan();
	
	public competencyItem: CompetencyItem = new CompetencyItem();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): DevelopmentPlanCompetency {
    return DevelopmentPlanCompetency.SeekInstance();
  }

  public static SeekInstance() : DevelopmentPlanCompetency {
    let developmentPlanCompetency: DevelopmentPlanCompetency = new DevelopmentPlanCompetency();
    // No Item...
    developmentPlanCompetency.ResetPaginate();
    return developmentPlanCompetency;
  }

  public static Validate(developmentPlanCompetency: DevelopmentPlanCompetency) : boolean {
    let result = Validator.Validate(developmentPlanCompetency.individualDevelopmentPlan) &&
					Validator.Validate(developmentPlanCompetency.competencyItem);
    if(result === false)
      console.log('DevelopmentPlanCompetency is unvalid : ', developmentPlanCompetency);
    return result;
  }
}