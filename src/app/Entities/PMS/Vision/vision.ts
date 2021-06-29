import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { VisionComment } from '../VisionComment/visionComment';
import { VisionApproved } from '../VisionApproved/visionApproved';
import { IndividualDevelopmentPlan } from '../IndividualDevelopmentPlan/individualDevelopmentPlan';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class Vision extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Vision.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'Vision', 'Vision');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public title: string = '';
	
	public date: Date = new Date();
	
	public employeeApprovementStatus: string = '';
	
	public directManagerApprovementStatus: string = '';
	
	public buheadApprovementStatus: string = '';

	//#endregion

  //#region Collection Properties

  public listOfVisionComment: VisionComment[] = [];
	
	public listOfVisionApproved: VisionApproved[] = [];
	
	public listOfIndividualDevelopmentPlan: IndividualDevelopmentPlan[] = [];

  //#endregion

  
  public get SeekInstance(): Vision {
    return Vision.SeekInstance();
  }

  public static SeekInstance() : Vision {
    let vision: Vision = new Vision();
    vision.date = null;
    vision.ResetPaginate();
    return vision;
  }

  public static Validate(vision: Vision) : boolean {
    let result = Validator.Validate(vision.employee) &&
					Validator.Validate(vision.title) &&
					Validator.Validate(vision.employeeApprovementStatus) &&
					Validator.Validate(vision.directManagerApprovementStatus) &&
					Validator.Validate(vision.buheadApprovementStatus);
    if(result === false)
      console.log('Vision is unvalid : ', vision);
    return result;
  }
}