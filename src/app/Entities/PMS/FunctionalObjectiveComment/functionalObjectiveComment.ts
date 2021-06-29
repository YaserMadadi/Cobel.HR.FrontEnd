import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { FunctionalObjective } from '../FunctionalObjective/functionalObjective';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class FunctionalObjectiveComment extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FunctionalObjectiveComment.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'FunctionalObjectiveComment', 'Functional Objective Comment');

  //endregion

  //#region Fields

	public functionalObjective: FunctionalObjective = new FunctionalObjective();
	
	public comment: string = '';
	
	public commenter: Employee = new Employee();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): FunctionalObjectiveComment {
    return FunctionalObjectiveComment.SeekInstance();
  }

  public static SeekInstance() : FunctionalObjectiveComment {
    let functionalObjectiveComment: FunctionalObjectiveComment = new FunctionalObjectiveComment();
    // No Item...
    functionalObjectiveComment.ResetPaginate();
    return functionalObjectiveComment;
  }

  public static Validate(functionalObjectiveComment: FunctionalObjectiveComment) : boolean {
    let result = Validator.Validate(functionalObjectiveComment.functionalObjective) &&
					Validator.Validate(functionalObjectiveComment.commenter);
    if(result === false)
      console.log('FunctionalObjectiveComment is unvalid : ', functionalObjectiveComment);
    return result;
  }
}