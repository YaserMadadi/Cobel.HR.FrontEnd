import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CoachingQuestionaryAnswered } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';
import { QuestionaryType } from '../QuestionaryType/questionaryType';
import { AnswerType } from '../AnswerType/answerType';


@Directive()
export class QuestionaryItem extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = QuestionaryItem.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'QuestionaryItem', 'Questionary Item');

  //endregion

  //#region Fields

	public questionaryType: QuestionaryType = new QuestionaryType();
	
	public questionTitle: string = '';
	
	public priority: number = 0;
	
	public answerType: AnswerType = new AnswerType();
	
	public helpContext: string = '';

	//#endregion

  //#region Collection Properties

  public listOfCoachingQuestionaryAnswered: CoachingQuestionaryAnswered[] = [];

  //#endregion

  
  public get SeekInstance(): QuestionaryItem {
    return QuestionaryItem.SeekInstance();
  }

  public static SeekInstance() : QuestionaryItem {
    let questionaryItem: QuestionaryItem = new QuestionaryItem();
    // No Item...
    questionaryItem.ResetPaginate();
    return questionaryItem;
  }

  public static Validate(questionaryItem: QuestionaryItem) : boolean {
    let result = Validator.Validate(questionaryItem.questionaryType) &&
					Validator.Validate(questionaryItem.questionTitle) &&
					Validator.Validate(questionaryItem.answerType) &&
					Validator.Validate(questionaryItem.helpContext);
    if(result === false)
      console.log('QuestionaryItem is unvalid : ', questionaryItem);
    return result;
  }
}