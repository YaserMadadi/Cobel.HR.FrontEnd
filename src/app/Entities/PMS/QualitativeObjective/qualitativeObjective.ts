import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { QualitativeKPI } from '../QualitativeKPI/qualitativeKPI';
import { TargetSetting } from '../TargetSetting/targetSetting';


@Directive()
export class QualitativeObjective extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = QualitativeObjective.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'QualitativeObjective', 'Qualitative Objective');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public title: string = '';
	
	public weight: number = 0;
	
	public totalKPIWeight: number = 0;
	
	public finalScore: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfQualitativeKPI: QualitativeKPI[] = [];

  //#endregion

  
  public get SeekInstance(): QualitativeObjective {
    return QualitativeObjective.SeekInstance();
  }

  public static SeekInstance() : QualitativeObjective {
    let qualitativeObjective: QualitativeObjective = new QualitativeObjective();
    // No Item...
    qualitativeObjective.ResetPaginate();
    return qualitativeObjective;
  }

  public static Validate(qualitativeObjective: QualitativeObjective) : boolean {
    let result = Validator.Validate(qualitativeObjective.targetSetting) &&
					Validator.Validate(qualitativeObjective.title);
    if(result === false)
      console.log('QualitativeObjective is unvalid : ', qualitativeObjective);
    return result;
  }
}