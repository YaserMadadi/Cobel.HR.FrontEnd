import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';
import { Position } from '../../HR/Position/position';


@Directive()
export class RotationAssessment extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RotationAssessment.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'RotationAssessment', 'Rotation Assessment');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public promotedDate: string = '';
	
	public currentPosition: Position = new Position();
	
	public proposedPosition: Position = new Position();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): RotationAssessment {
    return RotationAssessment.SeekInstance();
  }

  public static SeekInstance() : RotationAssessment {
    let rotationAssessment: RotationAssessment = new RotationAssessment();
    // No Item...
    rotationAssessment.ResetPaginate();
    return rotationAssessment;
  }

  public static Validate(rotationAssessment: RotationAssessment) : boolean {
    let result = Validator.Validate(rotationAssessment.assessment) &&
					Validator.Validate(rotationAssessment.currentPosition) &&
					Validator.Validate(rotationAssessment.proposedPosition);
    if(result === false)
      console.log('RotationAssessment is unvalid : ', rotationAssessment);
    return result;
  }
}