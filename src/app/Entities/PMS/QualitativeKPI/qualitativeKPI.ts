import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { QualitativeAppraise } from '../QualitativeAppraise/qualitativeAppraise';
import { QualitativeObjective } from '../QualitativeObjective/qualitativeObjective';


@Directive()
export class QualitativeKPI extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = QualitativeKPI.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'QualitativeKPI', 'Qualitative KPI');

  //endregion

  //#region Fields

	public qualitativeObjective: QualitativeObjective = new QualitativeObjective();
	
	public title: string = '';
	
	public weight: number = 0;
	
	public target: number = 0;
	
	public employeeScore: number = 0;
	
	public managerScore: number = 0;
	
	public description: string = '';

	//#endregion

  //#region Collection Properties

  public listOfQualitativeAppraise: QualitativeAppraise[] = [];

  //#endregion

  
  public get SeekInstance(): QualitativeKPI {
    return QualitativeKPI.SeekInstance();
  }

  public static SeekInstance() : QualitativeKPI {
    let qualitativeKPI: QualitativeKPI = new QualitativeKPI();
    // No Item...
    qualitativeKPI.ResetPaginate();
    return qualitativeKPI;
  }

  public static Validate(qualitativeKPI: QualitativeKPI) : boolean {
    let result = Validator.Validate(qualitativeKPI.qualitativeObjective) &&
					Validator.Validate(qualitativeKPI.title);
    if(result === false)
      console.log('QualitativeKPI is unvalid : ', qualitativeKPI);
    return result;
  }
}