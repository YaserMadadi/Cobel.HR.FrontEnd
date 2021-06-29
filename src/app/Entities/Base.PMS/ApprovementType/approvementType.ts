import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { VisionApproved } from '../../PMS/VisionApproved/visionApproved';


@Directive()
export class ApprovementType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ApprovementType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'ApprovementType', 'Approvement Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfVisionApproved: VisionApproved[] = [];

  //#endregion

  
  public get SeekInstance(): ApprovementType {
    return ApprovementType.SeekInstance();
  }

  public static SeekInstance() : ApprovementType {
    let approvementType: ApprovementType = new ApprovementType();
    approvementType.isActive = null;
    approvementType.ResetPaginate();
    return approvementType;
  }

  public static Validate(approvementType: ApprovementType) : boolean {
    let result = Validator.Validate(approvementType.title);
    if(result === false)
      console.log('ApprovementType is unvalid : ', approvementType);
    return result;
  }
}