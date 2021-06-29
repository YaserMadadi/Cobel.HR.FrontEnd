import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { AnswerTypeItem } from '../AnswerTypeItem/answerTypeItem';
import { QuestionaryItem } from '../QuestionaryItem/questionaryItem';


@Directive()
export class AnswerType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AnswerType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'AnswerType', 'Answer Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public comment: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfAnswerTypeItem: AnswerTypeItem[] = [];
	
	public listOfQuestionaryItem: QuestionaryItem[] = [];

  //#endregion

  
  public get SeekInstance(): AnswerType {
    return AnswerType.SeekInstance();
  }

  public static SeekInstance() : AnswerType {
    let answerType: AnswerType = new AnswerType();
    answerType.isActive = null;
    answerType.ResetPaginate();
    return answerType;
  }

  public static Validate(answerType: AnswerType) : boolean {
    let result = Validator.Validate(answerType.title);
    if(result === false)
      console.log('AnswerType is unvalid : ', answerType);
    return result;
  }
}