import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Level } from '../../HR/Level/level';


@Directive()
export class ObjectiveWeightNonOperational extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ObjectiveWeightNonOperational.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'ObjectiveWeightNonOperational', 'Objective Weight Non Operational');

  //endregion

  //#region Fields

	public level: Level = new Level();
	
	public functionalWeight: number = 0;
	
	public behavioralWeight: number = 0;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): ObjectiveWeightNonOperational {
    return ObjectiveWeightNonOperational.SeekInstance();
  }

  public static SeekInstance() : ObjectiveWeightNonOperational {
    let objectiveWeightNonOperational: ObjectiveWeightNonOperational = new ObjectiveWeightNonOperational();
    // No Item...
    objectiveWeightNonOperational.ResetPaginate();
    return objectiveWeightNonOperational;
  }

  public static Validate(objectiveWeightNonOperational: ObjectiveWeightNonOperational) : boolean {
    let result = Validator.Validate(objectiveWeightNonOperational.level);
    if(result === false)
      console.log('ObjectiveWeightNonOperational is unvalid : ', objectiveWeightNonOperational);
    return result;
  }
}