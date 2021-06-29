import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Vision } from '../Vision/vision';
import { Employee } from '../../HR/Employee/employee';
import { ApprovementType } from '../../Base.PMS/ApprovementType/approvementType';


@Directive()
export class VisionApproved extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = VisionApproved.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'VisionApproved', 'Vision Approved');

  //endregion

  //#region Fields

	public vision: Vision = new Vision();
	
	public byEmployee: Employee = new Employee();
	
	public approvementType: ApprovementType = new ApprovementType();
	
	public date: Date = new Date();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): VisionApproved {
    return VisionApproved.SeekInstance();
  }

  public static SeekInstance() : VisionApproved {
    let visionApproved: VisionApproved = new VisionApproved();
    visionApproved.date = null;
    visionApproved.ResetPaginate();
    return visionApproved;
  }

  public static Validate(visionApproved: VisionApproved) : boolean {
    let result = Validator.Validate(visionApproved.vision) &&
					Validator.Validate(visionApproved.byEmployee) &&
					Validator.Validate(visionApproved.approvementType);
    if(result === false)
      console.log('VisionApproved is unvalid : ', visionApproved);
    return result;
  }
}