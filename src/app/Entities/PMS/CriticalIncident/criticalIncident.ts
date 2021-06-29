import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CriticalIncidentRecognition } from '../CriticalIncidentRecognition/criticalIncidentRecognition';
import { Employee } from '../../HR/Employee/employee';
import { CriticalIncidentType } from '../CriticalIncidentType/criticalIncidentType';


@Directive()
export class CriticalIncident extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CriticalIncident.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'CriticalIncident', 'Critical Incident');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public criticalIncidentType: CriticalIncidentType = new CriticalIncidentType();
	
	public issueDate: Date = new Date();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  public listOfCriticalIncidentRecognition: CriticalIncidentRecognition[] = [];

  //#endregion

  
  public get SeekInstance(): CriticalIncident {
    return CriticalIncident.SeekInstance();
  }

  public static SeekInstance() : CriticalIncident {
    let criticalIncident: CriticalIncident = new CriticalIncident();
    criticalIncident.issueDate = null;
    criticalIncident.ResetPaginate();
    return criticalIncident;
  }

  public static Validate(criticalIncident: CriticalIncident) : boolean {
    let result = Validator.Validate(criticalIncident.employee) &&
					Validator.Validate(criticalIncident.criticalIncidentType);
    if(result === false)
      console.log('CriticalIncident is unvalid : ', criticalIncident);
    return result;
  }
}