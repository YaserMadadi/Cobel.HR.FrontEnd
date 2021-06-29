import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { AssessmentScore } from '../../LAD/AssessmentScore/assessmentScore';
import { CompetencyItemKPI } from '../CompetencyItemKPI/competencyItemKPI';
import { DevelopmentPlanCompetency } from '../DevelopmentPlanCompetency/developmentPlanCompetency';


@Directive()
export class CompetencyItem extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CompetencyItem.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'CompetencyItem', 'Competency Item');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfBehavioralObjective: BehavioralObjective[] = [];
	
	public listOfAssessmentScore: AssessmentScore[] = [];
	
	public listOfCompetencyItemKPI: CompetencyItemKPI[] = [];
	
	public listOfDevelopmentPlanCompetency: DevelopmentPlanCompetency[] = [];

  //#endregion

  
  public get SeekInstance(): CompetencyItem {
    return CompetencyItem.SeekInstance();
  }

  public static SeekInstance() : CompetencyItem {
    let competencyItem: CompetencyItem = new CompetencyItem();
    competencyItem.isActive = null;
    competencyItem.ResetPaginate();
    return competencyItem;
  }

  public static Validate(competencyItem: CompetencyItem) : boolean {
    let result = Validator.Validate(competencyItem.title);
    if(result === false)
      console.log('CompetencyItem is unvalid : ', competencyItem);
    return result;
  }
}