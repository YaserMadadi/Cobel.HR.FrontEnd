import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CriticalIncident } from '../CriticalIncident/criticalIncident';


@Directive()
export class CriticalIncidentType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CriticalIncidentType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'CriticalIncidentType', 'Critical Incident Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfCriticalIncident: CriticalIncident[] = [];

  //#endregion

  
  public get SeekInstance(): CriticalIncidentType {
    return CriticalIncidentType.SeekInstance();
  }

  public static SeekInstance() : CriticalIncidentType {
    let criticalIncidentType: CriticalIncidentType = new CriticalIncidentType();
    criticalIncidentType.isActive = null;
    criticalIncidentType.ResetPaginate();
    return criticalIncidentType;
  }

  public static Validate(criticalIncidentType: CriticalIncidentType) : boolean {
    let result = Validator.Validate(criticalIncidentType.title);
    if(result === false)
      console.log('CriticalIncidentType is unvalid : ', criticalIncidentType);
    return result;
  }
}