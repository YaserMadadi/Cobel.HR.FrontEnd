import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CriticalIncident } from '../CriticalIncident/criticalIncident';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class CriticalIncidentRecognition extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CriticalIncidentRecognition.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'CriticalIncidentRecognition', 'Critical Incident Recognition');

  //endregion

  //#region Fields

	public criticalIncident: CriticalIncident = new CriticalIncident();
	
	public time: Date = new Date();
	
	public writer: Employee = new Employee();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): CriticalIncidentRecognition {
    return CriticalIncidentRecognition.SeekInstance();
  }

  public static SeekInstance() : CriticalIncidentRecognition {
    let criticalIncidentRecognition: CriticalIncidentRecognition = new CriticalIncidentRecognition();
    criticalIncidentRecognition.time = null;
    criticalIncidentRecognition.ResetPaginate();
    return criticalIncidentRecognition;
  }

  public static Validate(criticalIncidentRecognition: CriticalIncidentRecognition) : boolean {
    let result = Validator.Validate(criticalIncidentRecognition.criticalIncident) &&
					Validator.Validate(criticalIncidentRecognition.writer);
    if(result === false)
      console.log('CriticalIncidentRecognition is unvalid : ', criticalIncidentRecognition);
    return result;
  }
}