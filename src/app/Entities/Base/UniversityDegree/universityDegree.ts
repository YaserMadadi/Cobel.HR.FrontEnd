import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Directive()
export class UniversityDegree extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = UniversityDegree.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'UniversityDegree', 'University Degree');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfUniversityHistory: UniversityHistory[] = [];

  //#endregion

  
  public get SeekInstance(): UniversityDegree {
    return UniversityDegree.SeekInstance();
  }

  public static SeekInstance() : UniversityDegree {
    let universityDegree: UniversityDegree = new UniversityDegree();
    universityDegree.isActive = null;
    universityDegree.ResetPaginate();
    return universityDegree;
  }

  public static Validate(universityDegree: UniversityDegree) : boolean {
    let result = Validator.Validate(universityDegree.title);
    if(result === false)
      console.log('UniversityDegree is unvalid : ', universityDegree);
    return result;
  }
}