import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { LanguageAbility } from '../../HR/LanguageAbility/languageAbility';


@Directive()
export class Language extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Language.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'Language', 'Language');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfLanguageAbility: LanguageAbility[] = [];

  //#endregion

  
  public get SeekInstance(): Language {
    return Language.SeekInstance();
  }

  public static SeekInstance() : Language {
    let language: Language = new Language();
    language.isActive = null;
    language.ResetPaginate();
    return language;
  }

  public static Validate(language: Language) : boolean {
    let result = Validator.Validate(language.title);
    if(result === false)
      console.log('Language is unvalid : ', language);
    return result;
  }
}