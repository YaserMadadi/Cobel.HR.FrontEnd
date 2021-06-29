import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Directive()
export class EducationSystem extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EducationSystem.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'EducationSystem', 'Education System');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfUniversityHistory: UniversityHistory[] = [];

  //#endregion

  
  public get SeekInstance(): EducationSystem {
    return EducationSystem.SeekInstance();
  }

  public static SeekInstance() : EducationSystem {
    let educationSystem: EducationSystem = new EducationSystem();
    educationSystem.isActive = null;
    educationSystem.ResetPaginate();
    return educationSystem;
  }

  public static Validate(educationSystem: EducationSystem) : boolean {
    let result = Validator.Validate(educationSystem.title);
    if(result === false)
      console.log('EducationSystem is unvalid : ', educationSystem);
    return result;
  }
}