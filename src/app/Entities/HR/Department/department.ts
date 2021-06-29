import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Unit } from '../Unit/unit';


@Directive()
export class Department extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Department.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Department', 'Department');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfUnit: Unit[] = [];

  //#endregion

  
  public get SeekInstance(): Department {
    return Department.SeekInstance();
  }

  public static SeekInstance() : Department {
    let department: Department = new Department();
    department.isActive = null;
    department.ResetPaginate();
    return department;
  }

  public static Validate(department: Department) : boolean {
    let result = Validator.Validate(department.title);
    if(result === false)
      console.log('Department is unvalid : ', department);
    return result;
  }
}