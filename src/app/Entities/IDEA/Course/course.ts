import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Training } from '../Training/training';


@Directive()
export class Course extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Course.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('IDEA', 'Course', 'Course');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfTraining: Training[] = [];

  //#endregion

  
  public get SeekInstance(): Course {
    return Course.SeekInstance();
  }

  public static SeekInstance() : Course {
    let course: Course = new Course();
    course.isActive = null;
    course.ResetPaginate();
    return course;
  }

  public static Validate(course: Course) : boolean {
    let result = Validator.Validate(course.title);
    if(result === false)
      console.log('Course is unvalid : ', course);
    return result;
  }
}