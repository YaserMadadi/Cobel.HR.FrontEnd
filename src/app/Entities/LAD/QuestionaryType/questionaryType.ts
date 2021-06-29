import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';
import { QuestionaryItem } from '../QuestionaryItem/questionaryItem';


@Directive()
export class QuestionaryType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = QuestionaryType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'QuestionaryType', 'Questionary Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfCoachingQuestionary: CoachingQuestionary[] = [];
	
	public listOfQuestionaryItem: QuestionaryItem[] = [];

  //#endregion

  
  public get SeekInstance(): QuestionaryType {
    return QuestionaryType.SeekInstance();
  }

  public static SeekInstance() : QuestionaryType {
    let questionaryType: QuestionaryType = new QuestionaryType();
    questionaryType.isActive = null;
    questionaryType.ResetPaginate();
    return questionaryType;
  }

  public static Validate(questionaryType: QuestionaryType) : boolean {
    let result = Validator.Validate(questionaryType.title);
    if(result === false)
      console.log('QuestionaryType is unvalid : ', questionaryType);
    return result;
  }
}