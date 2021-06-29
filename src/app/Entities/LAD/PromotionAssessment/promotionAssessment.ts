import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';
import { Position } from '../../HR/Position/position';
import { PromotionResult } from '../PromotionResult/promotionResult';


@Directive()
export class PromotionAssessment extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PromotionAssessment.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'PromotionAssessment', 'Promotion Assessment');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public promotedDate: string = '';
	
	public currentPosition: Position = new Position();
	
	public proposedPosition: Position = new Position();
	
	public promotionResult: PromotionResult = new PromotionResult();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): PromotionAssessment {
    return PromotionAssessment.SeekInstance();
  }

  public static SeekInstance() : PromotionAssessment {
    let promotionAssessment: PromotionAssessment = new PromotionAssessment();
    // No Item...
    promotionAssessment.ResetPaginate();
    return promotionAssessment;
  }

  public static Validate(promotionAssessment: PromotionAssessment) : boolean {
    let result = Validator.Validate(promotionAssessment.assessment) &&
					Validator.Validate(promotionAssessment.currentPosition) &&
					Validator.Validate(promotionAssessment.proposedPosition) &&
					Validator.Validate(promotionAssessment.promotionResult);
    if(result === false)
      console.log('PromotionAssessment is unvalid : ', promotionAssessment);
    return result;
  }
}