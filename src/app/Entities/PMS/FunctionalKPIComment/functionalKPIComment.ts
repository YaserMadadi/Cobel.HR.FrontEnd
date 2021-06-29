import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { FunctionalKPI } from '../FunctionalKPI/functionalKPI';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class FunctionalKPIComment extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FunctionalKPIComment.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'FunctionalKPIComment', 'Functional KPI Comment');

  //endregion

  //#region Fields

	public functionalKPI: FunctionalKPI = new FunctionalKPI();
	
	public comment: string = '';
	
	public commenter: Employee = new Employee();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): FunctionalKPIComment {
    return FunctionalKPIComment.SeekInstance();
  }

  public static SeekInstance() : FunctionalKPIComment {
    let functionalKPIComment: FunctionalKPIComment = new FunctionalKPIComment();
    // No Item...
    functionalKPIComment.ResetPaginate();
    return functionalKPIComment;
  }

  public static Validate(functionalKPIComment: FunctionalKPIComment) : boolean {
    let result = Validator.Validate(functionalKPIComment.functionalKPI) &&
					Validator.Validate(functionalKPIComment.commenter);
    if(result === false)
      console.log('FunctionalKPIComment is unvalid : ', functionalKPIComment);
    return result;
  }
}