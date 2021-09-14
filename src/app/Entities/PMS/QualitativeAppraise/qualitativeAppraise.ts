import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { QualitativeKPI } from '../QualitativeKPI/qualitativeKPI';
import { Employee } from '../../HR/Employee/employee';
import { AppraiseType } from '../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTime } from '../../Base.PMS/AppraiseTime/appraiseTime';


@Directive()
export class QualitativeAppraise extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = QualitativeAppraise.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'QualitativeAppraise', 'Qualitative Appraise');

  //endregion

  //#region Fields

	public qualitativeKPI: QualitativeKPI = new QualitativeKPI();
	
	public date: Date = new Date();
	
	public appraiser: Employee = new Employee();
	
	public appraiseType: AppraiseType = new AppraiseType();
	
	public actual: number = 0;
	
	public score: number = 0;
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): QualitativeAppraise {
    return QualitativeAppraise.SeekInstance();
  }

  public static SeekInstance() : QualitativeAppraise {
    let qualitativeAppraise: QualitativeAppraise = new QualitativeAppraise();
    qualitativeAppraise.date = null;
    qualitativeAppraise.ResetPaginate();
    return qualitativeAppraise;
  }

  public static Validate(qualitativeAppraise: QualitativeAppraise) : boolean {
    let result = Validator.Validate(qualitativeAppraise.qualitativeKPI) &&
					Validator.Validate(qualitativeAppraise.appraiser);
				//	Validator.Validate(qualitativeAppraise.appraiseType) &&
    if(result === false)
      console.log('QualitativeAppraise is unvalid : ', qualitativeAppraise);
    return result;
  }
}