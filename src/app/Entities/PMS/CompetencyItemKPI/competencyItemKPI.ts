import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralKPI } from '../BehavioralKPI/behavioralKPI';
import { CompetencyItem } from '../CompetencyItem/competencyItem';


@Directive()
export class CompetencyItemKPI extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CompetencyItemKPI.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'CompetencyItemKPI', 'Competency Item KPI');

  //endregion

  //#region Fields

	public competencyItem: CompetencyItem = new CompetencyItem();
	
	public title: string = '';

	//#endregion

  //#region Collection Properties

  public listOfBehavioralKPI: BehavioralKPI[] = [];

  //#endregion

  
  public get SeekInstance(): CompetencyItemKPI {
    return CompetencyItemKPI.SeekInstance();
  }

  public static SeekInstance() : CompetencyItemKPI {
    let competencyItemKPI: CompetencyItemKPI = new CompetencyItemKPI();
    // No Item...
    competencyItemKPI.ResetPaginate();
    return competencyItemKPI;
  }

  public static Validate(competencyItemKPI: CompetencyItemKPI) : boolean {
    let result = Validator.Validate(competencyItemKPI.competencyItem) &&
					Validator.Validate(competencyItemKPI.title);
    if(result === false)
      console.log('CompetencyItemKPI is unvalid : ', competencyItemKPI);
    return result;
  }
}