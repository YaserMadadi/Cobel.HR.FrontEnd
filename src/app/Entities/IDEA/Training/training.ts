import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../../HR/Employee/employee';
import { Course } from '../Course/course';


@Directive()
export class Training extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Training.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('IDEA', 'Training', 'Training');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public course: Course = new Course();
	
	public executiveYear: number = 0;
	
	public trainingStatus: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Training {
    return Training.SeekInstance();
  }

  public static SeekInstance() : Training {
    let training: Training = new Training();
    training.trainingStatus = null;
    training.ResetPaginate();
    return training;
  }

  public static Validate(training: Training) : boolean {
    let result = Validator.Validate(training.employee) &&
					Validator.Validate(training.course);
    if(result === false)
      console.log('Training is unvalid : ', training);
    return result;
  }
}