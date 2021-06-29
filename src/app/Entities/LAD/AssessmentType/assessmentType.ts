import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';


@Directive()
export class AssessmentType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AssessmentType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'AssessmentType', 'Assessment Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfAssessment: Assessment[] = [];

  //#endregion

  
  public get SeekInstance(): AssessmentType {
    return AssessmentType.SeekInstance();
  }

  public static SeekInstance() : AssessmentType {
    let assessmentType: AssessmentType = new AssessmentType();
    assessmentType.isActive = null;
    assessmentType.ResetPaginate();
    return assessmentType;
  }

  public static Validate(assessmentType: AssessmentType) : boolean {
    let result = Validator.Validate(assessmentType.title);
    if(result === false)
      console.log('AssessmentType is unvalid : ', assessmentType);
    return result;
  }
}