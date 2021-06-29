import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PositionCategory } from '../../HR/PositionCategory/positionCategory';
import { ApproverType } from '../../Base.PMS/ApproverType/approverType';


@Directive()
export class AppraisalApproverConfig extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AppraisalApproverConfig.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'AppraisalApproverConfig', 'Appraisal Approver Config');

  //endregion

  //#region Fields

	public departmentCategory: PositionCategory = new PositionCategory();
	
	public approverType: ApproverType = new ApproverType();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): AppraisalApproverConfig {
    return AppraisalApproverConfig.SeekInstance();
  }

  public static SeekInstance() : AppraisalApproverConfig {
    let appraisalApproverConfig: AppraisalApproverConfig = new AppraisalApproverConfig();
    // No Item...
    appraisalApproverConfig.ResetPaginate();
    return appraisalApproverConfig;
  }

  public static Validate(appraisalApproverConfig: AppraisalApproverConfig) : boolean {
    let result = Validator.Validate(appraisalApproverConfig.departmentCategory) &&
					Validator.Validate(appraisalApproverConfig.approverType);
    if(result === false)
      console.log('AppraisalApproverConfig is unvalid : ', appraisalApproverConfig);
    return result;
  }
}