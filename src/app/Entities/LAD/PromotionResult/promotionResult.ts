import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PromotionAssessment } from '../PromotionAssessment/promotionAssessment';


@Directive()
export class PromotionResult extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PromotionResult.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'PromotionResult', 'Promotion Result');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPromotionAssessment: PromotionAssessment[] = [];

  //#endregion

  
  public get SeekInstance(): PromotionResult {
    return PromotionResult.SeekInstance();
  }

  public static SeekInstance() : PromotionResult {
    let promotionResult: PromotionResult = new PromotionResult();
    promotionResult.isActive = null;
    promotionResult.ResetPaginate();
    return promotionResult;
  }

  public static Validate(promotionResult: PromotionResult) : boolean {
    let result = Validator.Validate(promotionResult.title);
    if(result === false)
      console.log('PromotionResult is unvalid : ', promotionResult);
    return result;
  }
}