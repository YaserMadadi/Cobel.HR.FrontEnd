import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { AnswerType } from '../AnswerType/answerType';


@Directive()
export class AnswerTypeItem extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AnswerTypeItem.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'AnswerTypeItem', 'Answer Type Item');

  //endregion

  //#region Fields

	public answerType: AnswerType = new AnswerType();
	
	public title: string = '';
	
	public value: number = 0;
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): AnswerTypeItem {
    return AnswerTypeItem.SeekInstance();
  }

  public static SeekInstance() : AnswerTypeItem {
    let answerTypeItem: AnswerTypeItem = new AnswerTypeItem();
    answerTypeItem.isActive = null;
    answerTypeItem.ResetPaginate();
    return answerTypeItem;
  }

  public static Validate(answerTypeItem: AnswerTypeItem) : boolean {
    let result = Validator.Validate(answerTypeItem.answerType) &&
					Validator.Validate(answerTypeItem.title);
    if(result === false)
      console.log('AnswerTypeItem is unvalid : ', answerTypeItem);
    return result;
  }
}