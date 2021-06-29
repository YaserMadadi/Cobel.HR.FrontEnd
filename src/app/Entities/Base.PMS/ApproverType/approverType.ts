import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { AppraisalApproverConfig } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig';


@Directive()
export class ApproverType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ApproverType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'ApproverType', 'Approver Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfAppraisalApproverConfig: AppraisalApproverConfig[] = [];

  //#endregion

  
  public get SeekInstance(): ApproverType {
    return ApproverType.SeekInstance();
  }

  public static SeekInstance() : ApproverType {
    let approverType: ApproverType = new ApproverType();
    approverType.isActive = null;
    approverType.ResetPaginate();
    return approverType;
  }

  public static Validate(approverType: ApproverType) : boolean {
    let result = Validator.Validate(approverType.title);
    if(result === false)
      console.log('ApproverType is unvalid : ', approverType);
    return result;
  }
}